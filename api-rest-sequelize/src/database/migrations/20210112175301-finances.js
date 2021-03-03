'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('finances', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {model: 'users', key: 'id'},
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
      },
      local: {
        type: Sequelize.STRING,
        allowNull: false
      },
      spent: {
       type: Sequelize.FLOAT,
       allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      useful: {
       type: Sequelize.BOOLEAN,
       allowNull: false
      },
      created_at: {
       type: Sequelize.DATE,
       allowNull: false
      },
      updated_at: {
       type: Sequelize.DATE,
       allowNull: false
      }
     
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('finances');
  }
};
