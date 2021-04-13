
const express = require('express');
const router = express.Router();

const newsController = require('../controllers/NewsController');

router.get('/news/:id', newsController.news_get_by_id);
router.get('/news', newsController.news_get_all);

module.exports = router;
