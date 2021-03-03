const {Model, DataTypes} = require('sequelize');

class Finances extends Model {
    static init(connection) {
        super.init({
            local:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio."
                    },
                    len: {
                        args: [10, 270],
                        msg: "Esse campo deve ter entre 10 a 270 carácteres."
                    }
                }
            },
            spent:{
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio."
                    }
                }
            }, 
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio."
                    }
                }
            },
            useful:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio."
                    },
                }
            },
        }, {
            sequelize: connection
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "user_id", as: "user"})
    }
}

module.exports = Finances;