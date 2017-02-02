/**
 * Created by admin on 2017/1/23.
 */
module.exports = {
    entry:'./js/docFooter.js',
    output:{
        filename:'docFooter.js',
        path:'./dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015',"stage-0",'react']
                }
            }
        ]
    }
};