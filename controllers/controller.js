const User = require('../models/User')
// configurando bcrypt
require("dotenv").config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const controller = {
    login: async function(req, res){
        let found = await User.find({username: req.body.username})

        if(found.length === 0){
            console.log('login não existe');
            res.send({login: 0, recipes: '[]'})
            return
        } 

        let user = found[0].toObject()//traansformando em objeto pois um obj mongoose não permite add novas propriedades

        let passwordCheck = await bcrypt.compare(req.body.password, user.password)

        if(passwordCheck){
            user.login = 1
            console.log('user logged', user);
            res.send(user)
        }else{
            console.log('user cant log');
            res.send({login: 0, recipes: '[]'})
        }
    },

    createAccount: async function(req, res){
        try {
            let hashPassword = await bcrypt.hash(req.body.password, saltRounds)

            let user = new User({
                username: req.body.username,
                password: hashPassword,
                user_id: Math.round(Math.random() * 1000),
                recipes: '[]'
            })
            let response = user.toObject()
    
            try {
                await user.save()
                response.login = 1
                console.log('sucess!');
                res.send(response)
            } catch (error) {
                response.login = 0
                console.log(error);
                console.log('error');
                res.send(response)
            }
            
        } catch (error) {
            console.log('error', error);
            res.send(error)
        }
    },
    
    updateRecipe: async function(req, res){
        try {
            let response = await User.updateOne({username: req.body.username}, {$set: { recipes: req.body.recipes}}, {new: true})
            let found = await User.find({username: req.body.username})
            let user = found[0].toObject()//traansformando em objeto pois um obj mongoose não permite add novas propriedades
            res.send(user)
        } catch (error) {
            console.log('error', error);
            res.send(error)
        }
    },
}

module.exports = controller