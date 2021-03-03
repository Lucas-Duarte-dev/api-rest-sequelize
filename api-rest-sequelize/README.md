# API REST usando Sequelize

## Intuito do projeto

Aprender mais sobre a criação de api com express e entender a lógica de criação de um usuário e verificação do mesmo, além de aprender novas dependências.

## Como Rodas na sua maquina


    1- Primeiro faça o clone do projeto na sua maquina
    ```javascript
    git clone ""
    cd api-rest-sequelize
    code . 
    ```
    2- Após fazer o clone baixe as dependências do projeto usando:
    `yarn install` ou `npm i`
    
    3- Crie uma pasta chamada `auth` e nele adicione um arquivo `db-auth.json` ou qualquer outro nome e coloque essas informações
     ```json
        {
            "dialect": "SGBD que está usando",
            "host": "localhost" /* Padrão */,
            "username": "Usuário do seu banco de dados",
            "password": "Senha do seu banco de dados",
            "database": "Nome do seu banco de dados"
        }
    ```
    ,porem não esqueça de importar o mesmo no index da pasta database e adicionar esse arquivo no 
    `const connection = new Sequelize(arquivo json de configurações do banco de dados);`

    4- Com tudo isso você pode fazer o que quiser com o código 😁


## Tecnologias e Dependências

    Express
    [Sequelize](http://sequelize.org)
    [bcrypt](https://www.npmjs.com/package/bcryptjs)
    [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
    [postgres](https://node-postgres.com)

### Obrigado por me visitar
