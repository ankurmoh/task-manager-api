const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



//  const me = new User({
//      name: 'Eva',
//      age: 22,
//      email : 'eva@gmail.com',
//      password : 'swimmingpool'
//  })

// me.save().then( () => {
//     console.log(me)
// }).catch( (error) => {
//     console.log('Error!', error)
// })


// const t = new Tasks({
//     description: 'Finishing a course',
//     Completed: true
// })
// t.save().then( () => {
//         console.log(t)
//      }).catch( (error) => {
//          console.log('Error!', error)
//      })
