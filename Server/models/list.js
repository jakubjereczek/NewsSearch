module.exports = class List {
    constructor(items = []) {
        this.models = items.map(item => new this.model(item));
    }

    add(item) {
        const lastId = this.models[this.models.length - 1] || -1;
        item.id = lastId + 1;

        this.models.push(item)
    }

    clearList() {
        this.models = [];
    }
}