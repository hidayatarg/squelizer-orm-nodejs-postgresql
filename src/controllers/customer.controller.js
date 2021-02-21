const db = require('../config/db.config');
const Customer = db.Customer;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Customer
  const customer = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    age: req.body.age,
    copyrightby: req.body.copyrightby,
  };

  // Save Customer in the database
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Customer.',
      });
    });
};

// Retrieve all Customer from the database.
exports.findAll = (req, res) => {
  const firstname = req.query.firstname;
  var condition = firstname
    ? { firstname: { [Op.iLike]: `%${firstname}%` } }
    : null;

  Customer.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving customers.',
      });
    });
};

// Find a single Customer with an id
exports.findOne = (req, res) => {};

// Update a Customer by the id in the request
exports.update = (req, res) => {};

// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Customer from the database.
exports.deleteAll = (req, res) => {};
