const express = require('express');
const router = express.Router();
const statisticsController = require("../controller/statisticsController");

router.get('/total-items', statisticsController.totalItems);
router.get('/average-price', statisticsController.averagePrice);
router.get('/categories-distribution', statisticsController.categoriesDistribution);

module.exports = router;
