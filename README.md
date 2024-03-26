# Contacts API
API desenvolvida utilizando o micro framework Fastify para gerenciamento de uma agenda de contatos

Esta API conta com autenticação JWT e bcrypt para a senha

Nela é possível:

- /auth/register  - Se registrar
- /auth/login     - Realizar o login


- /contacts       - Criar um contato
- /contacts       - Listas todos os contatos
- /contacts/:id   - Visualizar apenas um contato
- /contacts/:id   - Editar um contato
- /contacts       - Deletar um contato

# Para o rodar o projeto é necessário:
- .env
  - DATABASE_URL - uma url do banco de dados Mongo
  - JWT_SECRET - um código para utilizar como secret no JWT
- ```npm i ``` ou ```yarn ``` 
- ```npm run dev ``` ou ```yarn dev``` 
