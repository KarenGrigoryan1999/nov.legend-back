const {User} = require("../models/newModel")
const { Op } = require('sequelize')

class MainController{
    static async setDate(req,res){
        const user = await User.create({
            login:req.query.login,
            password:req.query.password
        })
        res.json({message:user});
    }
    static async getDate(req,res){
        const user = await User.findOne({
            where:{
                [Op.and]:[{login:'login'},{password:'password'}]
            }
        })
        res.json({message:user});
    }
}

module.exports = {MainController}