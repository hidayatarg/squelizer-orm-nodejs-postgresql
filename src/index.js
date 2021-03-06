const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const db = require('./config/db.config');

// -------------------------------- Routes --------------------------------
const customersRoutes = require('./routes/customer.routes')
app.use('/api/v1', customersRoutes)

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js Api Running' })
})


app.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
