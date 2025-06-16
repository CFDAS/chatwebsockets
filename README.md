//ATIVIDADES 1 E 2

# Chat em Tempo Real com WebSockets

Este é um projeto simples de um chat em tempo real construído com Node.js, Express e a biblioteca Socket.IO. A aplicação permite que múltiplos usuários se conectem e troquem mensagens instantaneamente, com um sistema de validação que garante que cada usuário tenha um nome único e válido.

Uma funcionalidade chave deste projeto é o registro de todas as mensagens em um arquivo de log para persistência e auditoria.

## Funcionalidades

  - **Chat em Tempo Real:** Mensagens enviadas são exibidas instantaneamente para todos os usuários conectados.
  - **Identificação de Usuário:** Cada mensagem é identificada com o nome do usuário que a enviou.
  - **Registro de Mensagens (Log):** Todas as conversas são salvas no arquivo `chat.log`.
  - **Validação de Nome de Usuário:** Impede que usuários entrem com nomes vazios ou que já estejam em uso.
  - **Controle de Usuários Ativos:** O servidor gerencia dinamicamente a lista de usuários conectados em tempo real.

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
    cd chatwebsockets
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor:**

    ```bash
    node server.js
    ```

    Você verá a mensagem `Servidor rodando na porta 3000` no seu terminal.

5.  **Acesse o chat no navegador:**
    Abra seu navegador e acesse o seguinte endereço: http://localhost:3000

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
