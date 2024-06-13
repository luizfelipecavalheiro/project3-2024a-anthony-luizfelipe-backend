# Controle de Estoque para Abrigos

Este projeto é um sistema de controle de estoque para abrigos, desenvolvido em Node.js utilizando Express e Sequelize para interação com um banco de dados PostgreSQL.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Endpoints](#endpoints)
  - [Abrigos](#abrigos)
  - [Itens](#itens)
  - [Usuários](#usuários)
  - [Doações](#doações)
- [Execução](#execução)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/project3-2024a-anthony-luizfelipe-backend.git
   cd project3-2024a-anthony-luizfelipe-backend

2. Instale as dependências:
   
    ```
   npm install
## Configuração 

1. Configure o arquivo config/database.js com suas credenciais do PostgreSQL:

    ```
    module.exports = {
        username: 'seu_usuario',
        password: 'sua_senha',
        database: 'nome_do_banco',
        host: 'localhost',
        dialect: 'postgres',
    };

3. Certifique-se de que o banco de dados PostgreSQL esteja rodando e que as tabelas sejam criadas automaticamente quando a aplicação iniciar.

## Endpoints

### Abrigos

- **POST /api/abrigos**
  - Criar um novo abrigo
  - Body:
    ```json
    {
        "nome": "Abrigo A",
        "localizacao": "Cidade A"
    }
    ```

- **GET /api/abrigos**
  - Obter todos os abrigos

- **GET /api/abrigos/:id**
  - Obter um abrigo pelo ID

- **PUT /api/abrigos/:id**
  - Atualizar um abrigo pelo ID
  - Body:
    ```json
    {
        "nome": "Abrigo Atualizado",
        "localizacao": "Nova Localização"
    }
    ```

- **DELETE /api/abrigos/:id**
  - Deletar um abrigo pelo ID

### Itens

- **POST /api/itens**
  - Criar um novo item
  - Body:
    ```json
    {
        "name": "Item 1",
        "quantity": 10,
        "category": "Categoria 1",
        "shelterId": 1
    }
    ```

- **GET /api/itens**
  - Obter todos os itens

- **GET /api/itens/:id**
  - Obter um item pelo ID

- **PUT /api/itens/:id**
  - Atualizar um item pelo ID
  - Body:
    ```json
    {
        "name": "Item Atualizado",
        "quantity": 20,
        "category": "Nova Categoria",
        "shelterId": 1
    }
    ```

- **DELETE /api/itens/:id**
  - Deletar um item pelo ID

### Usuários

- **POST /api/usuarios**
  - Criar um novo usuário
  - Body:
    ```json
    {
        "username": "usuario1",
        "password": "senha1",
        "email": "usuario1@example.com",
        "shelterId": 1
    }
    ```

- **GET /api/usuarios**
  - Obter todos os usuários

- **GET /api/usuarios/:id**
  - Obter um usuário pelo ID

- **PUT /api/usuarios/:id**
  - Atualizar um usuário pelo ID
  - Body:
    ```json
    {
        "username": "usuarioAtualizado",
        "password": "novaSenha",
        "email": "usuarioAtualizado@example.com",
        "shelterId": 1
    }
    ```

- **DELETE /api/usuarios/:id**
  - Deletar um usuário pelo ID

### Doações

- **POST /api/doacoes**
  - Criar uma nova doação
  - Body:
    ```json
    {
        "quantity": 5,
        "date": "2024-06-05T10:00:00.000Z",
        "itemId": 1,
        "userId": 1
    }
    ```

- **GET /api/doacoes**
  - Obter todas as doações

- **GET /api/doacoes/:id**
  - Obter uma doação pelo ID

- **PUT /api/doacoes/:id**
  - Atualizar uma doação pelo ID
  - Body:
    ```json
    {
        "quantity": 10,
        "date": "2024-06-06T11:00:00.000Z",
        "itemId": 1,
        "userId": 1
    }
    ```

- **DELETE /api/doacoes/:id**
  - Deletar uma doação pelo ID

## Execução

1. Inicie o servidor:
   ```bash
   npm run dev




