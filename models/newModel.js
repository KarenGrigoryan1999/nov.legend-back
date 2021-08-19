const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define('users',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    login:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {User}