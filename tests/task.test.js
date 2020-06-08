const request = require('supertest')
const Task = require('../src/models/task')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')
const app = require('../src/app')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
    .post('/tasks')
    .set('Authorization' , `Bearer ${userOne.tokens[0].token}`)
    .send({
        description : 'Just testing this out',
        Completed : true
    })
    .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
})
