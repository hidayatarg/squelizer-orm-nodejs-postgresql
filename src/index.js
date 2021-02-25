const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const db = require('./config/db.config');

// TODO: for development purpose
const customer = require('./controllers/customer.controller');
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js Api Running' })
})

app.get('/api/customers', customer.findAll)
app.get('/api/customers/:id', customer.findOne)
app.put('/api/customers/update/:id', customer.update)
app.delete('/api/customers/delete/:id', customer.delete)


app.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
