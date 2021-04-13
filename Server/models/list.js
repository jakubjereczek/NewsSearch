module.exports = class List {
    constructor(items = []) {
        this.models = items.map(item => new this.model(item));
    }
}