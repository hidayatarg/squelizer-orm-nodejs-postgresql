const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000;

const {dbConfig} = require("./config/db.config");

const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // optional
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

connection
  .authenticate()
  .then(() => console.log('connection established successfully'))
  .catch(err => console.log('Unable to connect to database ', err))



app.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});

