module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname.split('\\').slice(0, -1).concat(['build']).join('\\'),
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