const NewsController = require('./NewsController');
const { mockRequest, mockResponse, mockNext } = require('../utils/interceptor')
const newsList = require('../webScrapping');
const { NewsList, News } = require('../models/News');

beforeEach(() => {
    newsList.clearList(); // Each of test below will having a clear list of news.
});

test('get exist news from list', async () => {
    const new_news = new News();
    newsList.add(new_news);

    let req = mockRequest();
    req.params.id = 0;
    const res = mockResponse();

    await NewsController.news_get_by_id(req, res, null);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        data: new_news,
        message: 'News data'
    });
})

test('get doesnt exist news from list', async () => {
    let req = mockRequest();
    req.params.id = -1; // The first element of the list have id 0 and its getting up but it not important because i clearn the list up
    const res = mockResponse();

    await NewsController.news_get_by_id(req, res, null);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'News not found' });
})

test('get all news', async () => {
    const new_news = new News();
    const new_news2 = new News();

    newsList.add(new_news)
    newsList.add(new_news2)

    let req = mockRequest();
    const res = mockResponse();

    await NewsController.news_get_all(req, res, null);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'News data',
        data: newsList
    })
});

test('get empty array of news list', async () => {
    const req = mockRequest();
    const res = mockResponse();

    await NewsController.news_get_all(req, res, null);

    const result = new NewsList([]);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'News data',
        data: result
    })
    expect(result.models.length).toBe(0);
});



