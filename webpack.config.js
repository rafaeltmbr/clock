module.exports = {
    entry: __dirname + '/src/script/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: /node-module/
            }
        ]
    }
};