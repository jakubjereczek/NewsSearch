const newsList = require('./webScrapping');
const { News } = require('./models/News');
const { isArray } = require('lodash');

test('when newsList is empty, first element get id equals 0', () => {
    const newNews = new News();

    newsList.clearList();
    const lenghtAfterClearList = newsList.models.length;

    newsList.add(newNews)

    expect(lenghtAfterClearList).toBe(0);
    expect(newsList.models.length).toBe(1);
    expect(newNews.id).toBe(0);
})

test('check properly working of function clearList', () => {
    const newNews = new News();

    newsList.add(newNews)
    newsList.clearList();

    expect(newsList.models.length).toBe(0);
})

test('check properly working of function addMany', () => {
    const newNews = new News();
    const newNews2 = new News();

    newsList.addMany([newNews, newNews2]);

    expect(newsList.models.length).toBe(2);
})

test('return array of added in funtion addMany', () => {
    const newNews = new News();
    const newNews2 = new News();
    const news = [newNews, newNews2];
    const result = newsList.addMany(news);

    expect(isArray(result)).toBeTruthy();
    expect(result.length).toBe(news.length);
})

test('return null when array is empty in function addMany', () => {
    const result = newsList.addMany([]);
    expect(result).toBe(null);
})


test('return null when you dont passed array', () => {
    const result = newsList.addMany("string");
    expect(result).toBe(null);
})


test('each of added news in advance (without id) has diffirent id added in code', () => {
    const newNews = new News();
    const newNews2 = new News();
    const newNews3 = new News();
    newsList.addMany([newNews, newNews2, newNews3]);

    expect(newNews.id).toBeLessThan(newNews2.id);
    expect(newNews2.id).toBeLessThan(newNews3.id);
})

test('image string link should ends with image format file or be empty string', () => {
    const newNews = new News({
        image_url: "jpg.png"
    })
    newsList.add(newNews);
    for (let i = 0; i < newsList.models.length; i++) {
        if (newsList.models[i].image_url != "") {
            expect(newsList.models[i].image_url).toMatch(new RegExp(/.*\.(gif|jpe?g|bmp|png)$/igm))
        }
    }
})

