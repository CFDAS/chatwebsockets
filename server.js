console.log("--- SERVIDOR VERSÃO 3.0 INICIADO COM SUCESSO ---");

const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Atividade 2: Armazena os nomes dos usuários ativos.
// Usamos um Set para garantir que não haja nomes duplicados e pela performance.
const activeUsers = new Set();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

function logMessage(username, message) {
  const formattedTimestamp = new Date().toLocaleString('pt-BR');
  const logEntry = `[${formattedTimestamp}] ${username}: ${message}\n`;
  fs.appendFile('chat.log', logEntry, (err) => {
    if (err) {
      console.error('Erro ao gravar no arquivo de log:', err);
    }
  });
}

io.on('connection', (socket) => {
  console.log('Um novo usuário está tentando se conectar...');

  // Atividade 2: Lógica para validar e adicionar um novo usuário
  socket.on('add user', (username) => {
    const trimmedUsername = username.trim();

    // Validação 1: Nome vazio
    if (!trimmedUsername) {
      socket.emit('user validation', { success: false, message: 'O nome de usuário não pode ser vazio.' });
      return;
    }
    // Validação 2: Nome já em uso
    if (activeUsers.has(trimmedUsername)) {
      socket.emit('user validation', { success: false, message: 'Este nome de usuário já está em uso. Tente outro.' });
      return;
    }

    // Se o nome for válido, armazena no socket e na lista de ativos
    socket.username = trimmedUsername;
    activeUsers.add(trimmedUsername);

    console.log(`Usuário '${trimmedUsername}' aceito e conectado.`);
    socket.emit('user validation', { success: true });
  });

  // Atividade 2: Lógica para tratar mensagens de um usuário já validado
  socket.on('chat message', (msg) => {
    // Só processa a mensagem se o usuário estiver validado (tem um 'socket.username')
    if (socket.username) {
      logMessage(socket.username, msg);
      io.emit('chat message', { username: socket.username, message: msg });
    }
  });

  // Atividade 2: Lógica para remover o usuário ao desconectar
  socket.on('disconnect', () => {
    if (socket.username) {
      activeUsers.delete(socket.username);
      console.log(`Usuário '${socket.username}' desconectou.`);
    } else {
      console.log('Um usuário não validado desconectou.');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});