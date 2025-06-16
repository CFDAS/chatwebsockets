//ATIVIDADE 1

# Chat em Tempo Real com WebSockets

Este é um projeto simples de um chat em tempo real construído com Node.js, Express e a biblioteca Socket.IO. A aplicação permite que múltiplos usuários se conectem, escolham um nome e troquem mensagens instantaneamente.

Uma funcionalidade chave deste projeto é o registro de todas as mensagens em um arquivo de log para persistência e auditoria.

## Funcionalidades

  - **Chat em Tempo Real:** Mensagens enviadas são exibidas instantaneamente para todos os usuários conectados.
  - **Identificação de Usuário:** Cada mensagem é identificada com o nome do usuário que a enviou.
  - **Registro de Mensagens (Log):** Todas as conversas são salvas no arquivo `chat.log`, incluindo data, hora, usuário e a mensagem.

## Tecnologias Utilizadas

  - **Node.js:** Ambiente de execução para o JavaScript no lado do servidor.
  - **Express.js:** Framework para gerenciar o servidor web e as rotas.
  - **Socket.IO:** Biblioteca para habilitar a comunicação bidirecional e em tempo real entre o cliente e o servidor.

## Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

  - [Node.js](https://nodejs.org/en/) (que já vem com o npm, o gerenciador de pacotes)
  - [Git](https://git-scm.com/) (para clonar o repositório)

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/CFDAS/chatwebsockets.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd chatwebsocket
    ```

3.  **Instale as dependências:**
    Este comando irá ler o arquivo `package.json` e instalar todas as bibliotecas necessárias (Express e Socket.IO).

    ```bash
    npm install
    ```

4.  **Inicie o servidor:**

    ```bash
    node server.js
    ```

    Você verá a mensagem `Servidor rodando na porta 3000` no seu terminal.

5.  **Acesse o chat no navegador:**
    Abra seu navegador e acesse o seguinte endereço:
    [http://localhost:3000](http://localhost:3000)

    Para testar a conversa, abra o mesmo endereço em uma segunda aba ou janela do navegador e use um nome de usuário diferente.

## Estrutura de Arquivos

```
/
|-- public/
|   |-- index.html      # Interface do cliente (HTML, CSS e JS do navegador)
|-- node_modules/       # Dependências do projeto (criado pelo 'npm install')
|-- chat.log            # Arquivo de log com o histórico das mensagens (criado na 1ª msg)
|-- package.json        # Metadados e dependências do projeto
|-- package-lock.json   # Mapeamento exato da árvore de dependências
|-- server.js           # Lógica do servidor (Express e Socket.IO)
|-- README.md           # Este arquivo :)
```
