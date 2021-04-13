const Crawler = require("crawler");

const { News, NewsList } = require('./models/News');

// Lista w którym ładować będziemy dane.
let newsList = new NewsList([{
    id: 0,
    title: "USA: CDC i FDA apelują o wstrzymanie szczepień preparatem Johnson & Johnson.",
    description: "Obecnie nie ma żadnego związku między stwierdzonymi zakrzepami krwi a podaniem szczepionki przeciw COVID-19 firmy Johnson & Johnson - oświadczyła zaledwie kilka dni temu Amerykańska Agencja Żywności i Leków (FDA). Dziś agencja wraz z CDC wezwały do ​​natychmiastowego przerwania stosowania preparatu. Powodem jest sześć przypadków zakrzepów u kobiet.",
    category: "Zdrowie",
    link: "https://www.medonet.pl/porozmawiajmyoszczepionce/szczepionka-na-covid-19,szczepionka-j-j-i-zakrzepy--fda-i-cdc-chca-przerwac-podawanie-preparatu,artykul,50687083.html",
    date: new Date(),
    image_url: "https://ocdn.eu/pulscms-transforms/1/666k9kpTURBXy9kM2RhMmZhN2M1MDI4NGMwOGQ2MmZlYTBiOGE3YjI4NC5qcGeSlQMAH80D6M0CMpMFzQMCzQGQgaEwBQ"
}]);
// Jest w niej jeden przykladowy Obiekt, by zachować format dobry obiektu

const scrapping = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            console.log('Wykonuje scrapping');
            var $ = res.$;
            // $ is Cheerio by default

            // Wyczyszczenie listy przed scrappingiem nowym
            newsList = new NewsList();


            const lastId = newsList.models[newsList.models.length - 1] || 0;

            // W TAKI SPOSOB DODAJESZ COŚ DO LISTY
            newsList.add(new News({
                id: lastId
            }))


        }
    }
});

scrapping.queue([
    `https://ogloszenia.trojmiasto.pl/praca-zatrudnie`
]);


// Wystawiamy na zewnętrz tylko liste - zostanie pobrana w przypadku zapytania do API.
module.exports = newsList;