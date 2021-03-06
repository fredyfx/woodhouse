module.exports = {
    entry: './client/scripts/app.jsx',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}