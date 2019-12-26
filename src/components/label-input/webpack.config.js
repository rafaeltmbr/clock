module.exports = {
    entry: __dirname + '/label-input.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader'
            }
        ]
    }
};