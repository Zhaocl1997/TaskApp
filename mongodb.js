// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to databse!')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5d510569a907f03198c9a8b7")
    //  }, {
    //      $inc: {
    //          age: 1
    //      }
    //  }).then((result) => {
    //     console.log(result)
    //  }).catch((error) => {
    //     console.log(error)
    //  })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })    


    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    db.collection('tasks').deleteOne({
        description: 'Shits'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})