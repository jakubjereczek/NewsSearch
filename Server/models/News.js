const Model = require('./model');
const List = require('./list');

class News extends Model {
    get defaults() {
        return {
            id: null,
            title: "",
            description: "",
            category: "",
            link: "",
            data: new Date(),
            image_url: ""
        };
    }
}

class NewsList extends List {
    get model() {
        return News;
    }

}

module.exports = {
    News,
    NewsList
}
