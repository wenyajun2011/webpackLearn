const path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.(jpg|png|gif)$/,
            use:{
                loader:'url-loader',
                options:{
                    //placeholder 占位符
                    name:'[name]_[hash].[ext]',
                    outputPath:'images/',
                    limit:20
                }
            }
        },
        {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader']
        }
        ]
    }
}