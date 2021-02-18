const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const db = require('./config/db.config');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});



app.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
