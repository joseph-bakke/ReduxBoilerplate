const path = require('path');

module.exports = {
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            view: path.resolve('.'),
            components: path.resolve('./components'),
            actions: path.resolve('./data/actions'),
            reducers: path.resolve('./data/reducers'),
            style: path.resolve('./style'),
            middleware: path.resolve('./data/middleware'),
            config: path.resolve('./config'),
        },
    },
};
