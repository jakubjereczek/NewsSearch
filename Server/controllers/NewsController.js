const express = require('express');
const router = express.Router();

const newsList = require('../webScrapping');

const news_get_by_id = (req, res, next) => {
    const { id } = req.params;

    let requestSent = false;

    newsList.models.forEach(news => {
        if (news.id == id) {
            requestSent = true;
            return res.status(200).json({
                message: "News data",
                data: news
            })
        }
    });

    if (!requestSent) {
        res.status(200).json({
            message: "News not found",
        })

    }
}

const news_get_all = (req, res, next) => {

    // console.log(newsList)

    res.status(200).json({
        message: "News data",
        data: newsList
    })

}

module.exports = {
    news_get_by_id,
    news_get_all
}