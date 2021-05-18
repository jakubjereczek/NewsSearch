const { isArray } = require("lodash");

module.exports = class List {
    constructor(items = []) {
        this.models = items.map(item => new this.model(item));
    }

    add(item) {
        let lastId = null;
        if (this.models[this.models.length - 1]) {
            lastId = this.models[this.models.length - 1].id;
        } else {
            lastId = -1;
        }
        item.id = Number(lastId) + 1;

        this.models.push(item)
    }

    addMany(items) {
        if (!isArray(items) || items.length == 0) {
            return null;
        }
        for (const item of items) {
            this.add(item)
        }
        return items;
    }

    get(item) {
        return this.models.filter(i => i == item);
    }

    remove(item) {
        this.models = this.models.filter(i => i != item);
    }

    removeMany(items) {
        if (!isArray(items) || items.length == 0) {
            return null;
        }
        for (const items of items) {
            for (let i = 0; i < this.models.length; i++) {

            }
        }
    }

    clearList() {
        this.models = [];
    }
}