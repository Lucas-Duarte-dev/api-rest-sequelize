const jwt = require('jsonwebtoken');

const security = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
module.exports = {
    
    
    sign(payload) {
        return jwt.sign(payload, security, {expiresIn: 86400})  
    } ,
    verify(token) {
        return jwt.verify(token, security)
    }
    
}