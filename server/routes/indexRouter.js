const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/homepageController.js');

// home page ('index') router
router.get('/', recipeController.homepage);

module.exports = router;

