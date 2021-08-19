const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'TEST_DB',//Имя БД
    'postgres',//username
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port:5432
    }
)