const User = require('../model/User');
const jwt = require('../config/jwt')
const bcrypt = require('bcryptjs')

module.exports = {
    async index(req, res) {

        const [, hash] = req.headers.authorization.split(' ')    

        const [email, password] = Buffer.from(hash, 'base64').toString().split(':')
        
        try {
            
            const user = await User.findOne({where: { email }});
            
            if(!user) {
                return res.status(401).json({error: "user not found"});
            }

            if(!await bcrypt.compare(password, user.password)) return res.status(401).json({error: "password or email mismatch"});

            const token = jwt.sign({user: user.id})
            
            res.send({user, token});

                 
        } catch (error) {
            res.send(error);
        }
    }
}