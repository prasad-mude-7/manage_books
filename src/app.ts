import express from 'express';
import mongoose,{ConnectOptions} from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import 'dotenv/config'
import apiRoute from './routes/book.route'


import dbConfig from './config/db.config';


const app = express();


console.log("9asdasdasdasd",process.env.MONGODB_URI)



// Middleware
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
// app.use(morgan('combined')); // You can configure the format as needed.

// Database Connection (MongoDB)

  const mongooseOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions;

  
  mongoose.connect(dbConfig.mongoURI, mongooseOptions);

  const db = mongoose.connection;


  db.on('error', (error) => {
    console.error('Database connection error:', error);
  });
  db.once('open', () => {
    console.log('Database connected');
  });

  app.use(apiRoute)

  const port = process.env.PORT || 3000;


  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  })