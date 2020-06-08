const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Eva',
    email : 'eva@example.com',
    password : 'swimmingpool',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Eva',
    email: 'example@usc.edu',
    password: 'swimmingpool',
    tokens: [{
        token: jwt.sign({ _id: userTwoId}, process.env.JWT_SECRET)
    }]
}

// const taskOne = {
//     _id: new mongoose.Types.ObjectId(),
//     description: 'First task',
//     Completed: false,
//     owner: userOneId
// }

// const taskTwo = {
//     _id: new mongoose.Types.ObjectId(),
//     description: 'Second task',
//     Completed: true,
//     owner: userOneId
// }

// const taskThree = {
//     _id: new mongoose.Types.ObjectId(),
//     description: 'Third task',
//     Completed: false,
//     owner: userTwoId
// }

const setupDatabase = async () => {
    await User.deleteMany()
    //await taskOne.deleteMany()
    await new User(userOne).save()
    // await new taskOne(taskOne).save()
    // await new taskOne(taskTwo).save()
    // await new taskOne(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase
}