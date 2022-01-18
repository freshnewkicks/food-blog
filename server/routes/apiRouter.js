const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

// home page ('index') router
router.get('/', apiController.requests);

module.exports = router;
