const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'), // need to be absolute path
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'}
        ]
    },
    mode: 'production'
}