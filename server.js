const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const port = process.env.PORT || 5051;

   app.use(cors());
   app.use(express.json());

   const uri = process.env.MONGODB_URI;
   mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

   const connection = mongoose.connection;
   connection.once('open', () => {
     console.log("MongoDB database connection established successfully");
   });

   connection.on('error', (err) => {
     console.error('MongoDB connection error:', err);
   });

   // Add routes here later

   app.listen(port, () => {
     console.log(`Server is running on port: ${port}`);
   });