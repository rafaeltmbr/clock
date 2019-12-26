module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};