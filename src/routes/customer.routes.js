const express = require('express');

const router = express.Router();

const {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
} = require('../controllers/customer.controller');

router.route('/customers').get(findAll);
router.route('/customers/:id').get(findOne);
router.route('/customers/new').post(create);

router
    .route('/customers/:id')
    .put(update)
    .delete(deleteOne);

module.exports = router;
