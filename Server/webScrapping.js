const Crawler = require("crawler");
var uniqid = require('uniqid');

const { News, NewsList } = require("./models/News");

let newsList = new NewsList([]);

const scrapperDgp = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      const dgpElements = $("div[class='listItem listItemSolr itarticle']");
      for (let i = 0; i < dgpElements.length; i++) {
        const el = dgpElements[i].children[0];
        ogloszenieDgp = {
          id: uniqid(),
          title:el.next.attribs.title,
          desc: el.next.children[1].next.next.children[3].children[0].data,
          link: el.next.attribs.href,          
          category: "Dziennik Gazeta Prawna",
          date: new Date(),
          image_url: el.next.children[1].children[1].attribs.src
        };
        newsList.add(new News(ogloszenieDgp));
      }
    }
    done();
  },
});

const scrapperGazeta = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      const gazetaElements = $("li.entry");
      for (let i = 4; i < gazetaElements.length; i++) {
        const el = gazetaElements[i];
        ogloszenieGazeta = {
          id: uniqid(),
          title: el.children[1].attribs.title,
          desc: el.children[0].next.next.next.children[4].prev.children[0].data,
          link: el.children[1].attribs.href,
          category: "Gazeta.pl",
          date: new Date(),
          image_url:
            el.children[0].next.children[1].children[1].attribs["data-src"],
        };
        newsList.add(new News(ogloszenieGazeta));
      }
    }
  },
});

const scrapperTokfm = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      console.log("Wykonuje scrapping");
      var $ = res.$;

      const tokfmEvenElements = $("li[class='entry  even article']");
      const tokFmOddElements = $("li[class='entry  odd article']");
      for (let i = 0; i < tokfmEvenElements.length; i++) {
        const el = tokfmEvenElements[i];
        ogloszenieTokfmF = {
          id: uniqid(),
          title: el.children[2].children[0].attribs.title,
          desc: el.children[4].children[0].data,
          link: el.children[2].children[0].attribs.href,
          category: "Wiadomości Tok-FM",
          date: new Date(),
          image_url: el.children[1].children[1].children[0].children[1].children[1].attribs.src
        };
        newsList.add(new News(ogloszenieTokfmF));
      }
      for (let i = 0; i < tokFmOddElements.length; i++) {
        const el = tokFmOddElements[i];
        ogloszenieTokfmS = {
          id: uniqid(),
          title: el.children[2].children[0].attribs.title,
          desc: el.children[4].children[0].data,
          link: el.children[2].children[0].attribs.href,
          category: "Wiadomości Tok-FM",
          date: new Date(),
          image_url: el.children[1].children[1].children[0].children[1].children[1].attribs.src
        };
        newsList.add(new News(ogloszenieTokfmS));
      }
    }
  },
});

scrapperGazeta.queue(["https://wiadomosci.gazeta.pl"]);
scrapperDgp.queue(["https://www.gazetaprawna.pl/wiadomosci"]);
scrapperTokfm.queue(["https://www.tokfm.pl/Tokfm/0,103094.html"]);
module.exports = newsList;
