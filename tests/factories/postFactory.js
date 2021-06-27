const supertest = require('supertest');
const host = 'http://localhost:5000';
const request = supertest(host);

module.exports = async (title, body, user, token) => {
    const res = await request
        .post('/api/posts')
        .send({title, body, user})
        .set('x-auth-token', token);
    
    return res.body;
}