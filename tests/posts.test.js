const supertest = require('supertest');
const host = 'http://localhost:5000';
const request = supertest(host);

const userFactory = require('./factories/userFactory');
const postFactory = require('./factories/postFactory');

let testUser;


beforeAll(async () => {
    // Create a test user
    testUser = await userFactory('posts_user', '4567');
});


afterAll(async () => {
    // Delete test user
    await request.delete(`/api/auth/${testUser._id}`);
});


/* ===================================
   Post Endpoints
=================================== */
describe('Post endpoints', () => {

    let post1;
    let post2;
    let post3;

    beforeAll(async () => {
        // Populate db with 3 posts
        post1 = await postFactory('Post 1', 'This is post 1', testUser._id, testUser.token);
        post2 = await postFactory('Post 2', 'This is post 2', testUser._id, testUser.token);
        post3 = await postFactory('Post 3', 'This is post 3', testUser._id, testUser.token);
    });


    test('gets all posts', async () => {
        const res = await request
            .get('/api/posts')
            .set('x-auth-token', testUser.token);

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(3);
    });

    test('gets one post', async () => {
        const res = await request
            .get('/api/posts/' + post1._id)
            .set('x-auth-token', testUser.token);

        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual(
            expect.objectContaining({
                title: 'Post 1',
                body: 'This is post 1',
                user: testUser._id
            }));
    });


    test('saves a new post', async () => {
        const res = await request
            .post('/api/posts')
            .send({ title: 'Post 4', body: 'This is post 4', user: testUser._id })
            .set('x-auth-token', testUser.token);

        const resGetSingle = await request
            .get('/api/posts/' + res.body._id)
            .set('x-auth-token', testUser.token);

        expect(resGetSingle.body).toEqual(
            expect.objectContaining({
                title: 'Post 4',
                body: 'This is post 4',
                user: testUser._id
            }));
    });


    test('updates a post', async () => {
        const res = await request
            .put('/api/posts/' + post1._id)
            .send({ title: 'Post #1' })
            .set('x-auth-token', testUser.token);

        expect(res.body).toEqual(
            expect.objectContaining({
                title: 'Post #1',
                body: 'This is post 1',
                user: testUser._id
            }));
    });


    test('deletes a post', async () => {
        const res = await request
            .delete('/api/posts/' + post1._id)
            .set('x-auth-token', testUser.token);

        expect(res.body._id).toBe(post1._id);

        const resGetAll = await request
            .get('/api/posts')
            .set('x-auth-token', testUser.token);

        expect(resGetAll.body.length).toBe(3);

        const resGetOne = await request
            .get('/api/posts/' + post1._id)
            .set('x-auth-token', testUser.token);

        expect(resGetOne.body).toEqual({
            msg: 'Post not found'
        });
    });


    /* ===================================
       Not Found Error Handling 
    =================================== */
    describe('word not found responds with msg', () => {

        test('when fetching', async () => {
            const res = await request
                .get('/api/posts/6095b6214829cbe546b1f3b2')
                .set('x-auth-token', testUser.token);

            expect(res.body).toEqual({
                msg: 'Post not found'
            });
        })

        test('when updating', async () => {
            const res = await request
                .put('/api/posts/6095b6214829cbe546b1f3b2')
                .set('x-auth-token', testUser.token);

            expect(res.body).toEqual({
                msg: 'Post not found'
            });
        })

        test('when deleting', async () => {
            const res = await request
                .delete('/api/posts/6095b6214829cbe546b1f3b2')
                .set('x-auth-token', testUser.token);

            expect(res.body).toEqual({
                msg: 'Post not found'
            });
        })



        /* ===================================
           Not Authorized Error Handling
        =================================== */
        describe('unauthorized request responds with msg', () => {
            test('when fetching', async () => {
                const res = await request
                    .get('/api/posts/' + post2._id);

                const res2 = await request
                    .get('/api/posts');


                expect(res.body && res2.body).toEqual({
                    msg: 'No token, authorization denied'
                });
            })

            test('when updating', async () => {
                const res = await request
                    .put('/api/posts/' + post2._id)
                    .send({ title: 'Post 2' });

                expect(res.body).toEqual({
                    msg: 'No token, authorization denied'
                });
            })

            test('when deleting', async () => {
                const res = await request
                    .delete('/api/posts/' + post2._id);

                expect(res.body).toEqual({
                    msg: 'No token, authorization denied'
                });
            })
        })
    });
});

