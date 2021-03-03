const User = require('../model/User')
const jwt = require('../config/jwt')
const bcrypt = require('bcryptjs')

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll();
            res.json(users)

        } catch (err) {
            res.status(500).send({error: err})
        }
    },

    async store(req, res) {
        const {name, subname, username, email, password} = req.body
        try {   
            const password_hash = await bcrypt.hash(password, 8)

            const user = await User.create({name, subname, username, email, password: password_hash});

            const token = jwt.sign({user: user.id})
           
            return res.json({user, token});

        } catch (err) {

            res.status(500).send(err)

        }
    },

    async delete(req, res) {
       

        const user = await User.findByPk(req.params.id)

        if(!user) {
            res.status(404)
        }

        user.destroy({where: {id: req.params.id}, force: true})

        res.json({sucess: "sucess"})
    }
    
}