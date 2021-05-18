const express = require('express');
const router = express.Router();

const newsList = require('../webScrapping');

const news_get_by_id = (req, res, next) => {
    const { id } = req.params;

    const result = newsList.models.filter(news => news.id == id);
    if (result.length) {
        return res.status(200).json({
            message: "News data",
            data: result
        })
    } else {
        return res.status(200).json({
            message: "News not found",
        })
    }
}

const news_get_all = (req, res, next) => {

    if (newsList.models.length) {
        res.status(200).json({
            message: "News data",
            data: newsList
        })
    } else {
        return res.status(200).json({
            message: "News not found",
            data: []
        })
    }
}

module.exports = {
    news_get_by_id,
    news_get_all
}