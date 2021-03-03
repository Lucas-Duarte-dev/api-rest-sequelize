const {dialect, host, username, password, database} = require('../auth/db-auth.json');

module.exports = {
    dialect, 
    host,
    username,
    password,
    database,
    define: {
        timestamps: true,
        underscored: true,
    }
}