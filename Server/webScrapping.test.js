const newsList = require('./webScrapping');
const { News } = require('./models/News');

test('if newsList is empty (lenght = 0) first added news will have id equals 0 and working adding after cleared newsList', () => {
    newsList.clearList();

    const lenghtAfterClearList = newsList.models.length;
    const new_news = new News();
    newsList.add(new_news)

    expect(lenghtAfterClearList).toBe(0); // clear list
    expect(newsList.models.length).toBe(1); // lenght with new element
    expect(new_news.id).toBe(0); // id of new news
})

test('clear the list', () => {
    const new_news = new News();
    newsList.add(new_news)

    newsList.clearList();

    expect(newsList.models.length).toBe(0);
})