const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * Função dedicada para registrar mensagens no arquivo chat.log.
 */
function logMessage(username, message) {
  const timestamp = new Date().toISOString();
  // Formatando a data/hora para o padrão brasileiro e removendo os segundos/milissegundos
  const formattedTimestamp = new Date().toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const logEntry = `[${formattedTimestamp}] ${username}: ${message}\n`;

  fs.appendFile('chat.log', logEntry, (err) => {
    if (err) {
      console.error('Erro ao gravar no arquivo de log:', err);
    }
  });
}

io.on('connection', (socket) => {
    console.log('um usuário conectou');

    socket.on('disconnect', () => {
        console.log('usuário desconectou');
    });

    socket.on('chat message', (data) => {
        // CORREÇÃO FINAL: Usando data.username e data.message
        if (data && data.username && data.message) {
          logMessage(data.username, data.message);
        }
      
        // Reenvia a mensagem para todos os clientes
        io.emit('chat message', data);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});