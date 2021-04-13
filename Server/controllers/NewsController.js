const express = require('express');
const router = express.Router();

const { News, NewsList } = require('../models/News');

const newsList = new NewsList([{
    id: 0,
    title: "USA: CDC i FDA apelują o wstrzymanie szczepień preparatem Johnson & Johnson.",
    description: "Obecnie nie ma żadnego związku między stwierdzonymi zakrzepami krwi a podaniem szczepionki przeciw COVID-19 firmy Johnson & Johnson - oświadczyła zaledwie kilka dni temu Amerykańska Agencja Żywności i Leków (FDA). Dziś agencja wraz z CDC wezwały do ​​natychmiastowego przerwania stosowania preparatu. Powodem jest sześć przypadków zakrzepów u kobiet.",
    category: "Zdrowie",
    link: "https://www.medonet.pl/porozmawiajmyoszczepionce/szczepionka-na-covid-19,szczepionka-j-j-i-zakrzepy--fda-i-cdc-chca-przerwac-podawanie-preparatu,artykul,50687083.html",
    date: new Date(),
    image_url: "https://ocdn.eu/pulscms-transforms/1/666k9kpTURBXy9kM2RhMmZhN2M1MDI4NGMwOGQ2MmZlYTBiOGE3YjI4NC5qcGeSlQMAH80D6M0CMpMFzQMCzQGQgaEwBQ"
},
{
    id: 1,
    title: "USA: CDC i FDA apelują o wstrzymanie szczepień preparatem Johnson & Johnson.",
    description: "Obecnie nie ma żadnego związku między stwierdzonymi zakrzepami krwi a podaniem szczepionki przeciw COVID-19 firmy Johnson & Johnson - oświadczyła zaledwie kilka dni temu Amerykańska Agencja Żywności i Leków (FDA). Dziś agencja wraz z CDC wezwały do ​​natychmiastowego przerwania stosowania preparatu. Powodem jest sześć przypadków zakrzepów u kobiet.",
    category: "Zdrowie",
    link: "https://www.medonet.pl/porozmawiajmyoszczepionce/szczepionka-na-covid-19,szczepionka-j-j-i-zakrzepy--fda-i-cdc-chca-przerwac-podawanie-preparatu,artykul,50687083.html",
    date: new Date(),
    image_url: "https://ocdn.eu/pulscms-transforms/1/666k9kpTURBXy9kM2RhMmZhN2M1MDI4NGMwOGQ2MmZlYTBiOGE3YjI4NC5qcGeSlQMAH80D6M0CMpMFzQMCzQGQgaEwBQ"
}]);


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

    res.status(200).json({
        message: "News data",
        data: newsList
    })

}

module.exports = {
    news_get_by_id,
    news_get_all
}