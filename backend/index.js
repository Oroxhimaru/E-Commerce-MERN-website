const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');


const app = express();

app.use(cors());


//route
/* app.post('/register', async (req, res) => {
     const user = new User(req.body);
     const result = await user.save();
     res.json(result.toObject()); // Converts the Mongoose document to a plain JavaScript object
})
 */

app.post('/register', async (req, res) => {
     const user = new User(req.body);
     try {
         const result = await user.save();
         res.json(result); // Automatically uses the toJSON method in the schema
     } catch (error) {
         res.status(400).json({ error: error.message });
     }
 });
 
app.listen(5000); //door for app 








