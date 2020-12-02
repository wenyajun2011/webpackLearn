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
            use:['style-loader',
            {
                loader:'css-loader',
                options:{
                    //css文件中引入其他css文件时配置此参数会执行两个loader再执行此处的loader
                    //即先执行postcss-loader,less-loader,再执行css-loader
                    importLoaders:2,
                    //开启css的模块化打包
                    modules:true
                }
            },
            'less-loader',
            'postcss-loader'
            ]
        }
        ]
    }
}