const supertest = require('supertest');
const host = 'http://localhost:5000';
const request = supertest(host);

const userFactory = require('./factories/userFactory');

let testUser;

beforeAll(async () => {
    testUser = await userFactory()
});


afterAll(async () => {
    // Delete test user
    await request.delete(`/api/auth/${testUser._id}`);
});



/* ===================================
   Register
=================================== */

describe('Register user', () => {

    // Register user responds with token
    test('responds with a token', async () => {
        const res = await request
            .post('/api/auth/register')
            .send({
                name: "zoey",
                password: "1234"
            })


        // Get user id and delete
        const resUser = await request
            .get('/api/auth')
            .set('x-auth-token', res.body.token)

        let userId = resUser.body._id;

        await request.delete(`/api/auth/${userId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeTruthy();
    });

    // Register with name that is taken
    test('when username already exits', async () => {
        const res = await request
            .post('/api/auth/register')
            .send({
                name: "test_user",
                password: "1234"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBeTruthy();
    });
});


/* ===================================
   Login 
=================================== */
describe('Login user', () => {
    test('responds with a token', async () => {
        const res = await request
            .post('/api/auth/login')
            .send({
                name: "test_user",
                password: "1234"
            })

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeTruthy();
    })

    test('when name is invalid', async () => {
        const res = await request
            .post('/api/auth/login')
            .send({
                name: "test_",
                password: "1234"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBeTruthy();
    })

    test('when password is incorrect', async () => {
        const res = await request
            .post('/api/auth/login')
            .send({
                name: "test_user",
                password: "12345"
            })

        // expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBeTruthy();
    })

});


/* ===================================
   Get user
=================================== */

describe('Get user', () => {

    // Get user with token
    test('responds with user information', async () => {
        const res = await request
            .get('/api/auth')
            .set('x-auth-token', testUser.token);

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toEqual('test_user');
    })

    // Get user without token
    test('without token gets authorization denied', async () => {
        const res = await request.get('/api/auth');

        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toEqual("No token, authorization denied");

    });

});



