const Finances = require('../model/Finances');
const User = require('../model/User');

module.exports = {

    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'finances' }
        });

        res.json(user);
    },

    async store(req, res) {

        const {user_id} = req.params;

        const {local, spent, amount, useful} = req.body;
        
        const user = await User.findByPk(user_id);

        if(!user) {
            res.status(404).send({error: "User not found."});
        }

        const finances = await Finances.create({
            local, spent, amount, useful, user_id
        })

        res.json(finances);
    }
}