//CRUD - Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

// //buffer - binary data
// console.log(id.id)
// console.log(id.id.length)

//console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('Connected to Database!')

    const db = client.db(databaseName)


    //deleting data from documents

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Finish cours'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //updating Documents in collection

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ed770193f376365babb1254")
    // }, {
    //     $set: {
    //         name: 'Asha',
    //         age: 26
    //     },
    //     $inc: {
    //         age: 27
    //     }
    // })

    // updatePromise.then((result)=> {
    //     console.log('Success',result)
    // }).catch((error) => {
    //     console.log('Error', error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log('Success', result)
    // }).catch((error) => {
    //     console.log('Error!', error)
    // })


    //fetching data from database

    // db.collection('users').findOne({name: 'Patricia', age: 44} , (error, user) => {
    //     if (error)
    //     {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5ed761ea7e99554fc6a0a3ca")} , (error, user) => {
    //          if (error)
    //          {
    //              return console.log('Unable to fetch')
    //          }
    //          console.log(user)
    //      })

    // db.collection('users').find({ age : 25}).toArray((error, users) => {
    //     console.log(users)
    // })  

    // db.collection('users').find({ age : 25}).count((error, count) => {
    //     console.log(count)
    // })  

    // db.collection('tasks').find({ completed : false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // }) 

    //insert single record in DB

    // db.collection('users').insertOne({
    //     _id : id,
    //     name : 'Patricia',
    //     age : 24
    // },
    //     (error, result) => {
    //         if (error)
    //         {
    //         return console.log('Unable to insert user')   
    //         }   
    //     console.log(result.ops)
    //     })

    //insert multiple records in DB

    // db.collection('users').insertMany([
    //     {
    //         name: ' Eva',
    //         age: 22
    //     } , 
    //     {
    //         name: 'Anabella',
    //         age: 26
    //     }
    // ] , (error, result) => {
    //     if (error)
    //     {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean House',
    //         completed: true
    //     } , 
    //     {
    //         description: 'Pick up packagae',
    //         completed: false
    //     }, 
    //     {
    //         description: 'Finish cours',
    //         completed: false
    //     }
    // ] , (error, result) => {
    //     if (error)
    //     {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    })
