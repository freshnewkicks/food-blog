const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepageController.js');

// home page ('index') router
router.get('/', homepageController.homepage);

module.exports = router;

