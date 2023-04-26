

const mongoose = require('mongoose');
const mongooseURI='mongodb+srv://talhariaz:talhariaz@cluster0.k2itfyk.mongodb.net/portel?retryWrites=true&w=majority'
const MongoClient = require('mongodb').MongoClient;


const connectToMongo = () => {
  // MongoClient.connect(mongooseURI, function(err, db) {
  //   if (err) throw err;
  //   console.log("Connected to database!");
    
  //   // Perform database operations here...
    
  //   db.close();
  // });
  
  mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true ,connectTimeoutMS: 50000,
    socketTimeoutMS: 50000})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
}

module.exports= connectToMongo;
