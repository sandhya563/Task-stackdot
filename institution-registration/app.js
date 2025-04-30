// require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./modeles');
const registrationRoutes = require('./routes/registrationRoutes');

app.use(express.json());
app.use('/api', registrationRoutes);

db.sequelize.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
        console.log('Server is runing on port 3000');
        
    })
})