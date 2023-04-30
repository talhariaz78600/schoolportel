const connectToMongo=require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors=require('cors')
connectToMongo();   
const express = require('express')
const app = express()
const path=require('path')
const port =process.env.port|| 4000;
app.use(bodyParser.json({ limit: '500mb' }));

app.use(express.json())
app.use(cors());
///avilable routes////////
app.use('/api/email',require('./routes/mail'));
app.use('/api/student',require('./routes/student'));
app.use('/api/teacher',require('./routes/teacher'));
app.use('/api/attendence',require('./routes/attendence'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/result',require('./routes/result'));
app.use('/api/frist',require('./routes/frist'));
//serving the fornted
app.use(express.static(path.join(__dirname,'./portel/build')))
app.get('*',(req,res)=>{
  path.join("./portel/build/index.html"),
  function(err){
    res.status(500).send(err);
  }
})
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});
const server=app.listen(port, () => {
  console.log(`inotebook app listening on port ${port}`)
  
})
server.timeout = 60000;