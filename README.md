### 软件包管理器Bower
    
1. bower init

    ````
    生成一个bower.json文件，用来保存该项目的配置
    ````
1. .bowerrc配置
    
    ````
    {
        "directory": "app/bower_components"
    }
    ````
1. 安装包：
    
    1. bower install vue --save 
    1. bower install vue-router --save


### webpack插件

1. **html-webpack-plugin配置**

    ````
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    plugins: [new HtmlWebpackPlugin()]
    ````
    
1. **clean-webpack-plugin配置**
    ````
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    new CleanWebpackPlugin(
        ['dist/',],　 //匹配删除的文件
        {
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        }
    )
    ````

1. **copy-webpack-plugin配置**

    ````
    const CopyWebpackPlugin = require('copy-webpack-plugin');    
    new CopyWebpackPlugin([{
        from: __dirname + '/app/partials',
        to: __dirname + '/dist/partials'
    }])
    ````

1. **mini-css-extract-plugin**
    
    **webpack4.X使用mini-css-extract-plugin来单独打包css**
    ````
    const CssPlugin = require('mini-css-extract-plugin');    
    new CssPlugin({
        filename: "css/[name].css",
        chunkFilename: "[id].css"
    }),
    ````


### 基本依赖
    
1. npm i vue-loader vue-template-compiler -D 

    ```
    最新版本的vue-loader（^15.0.10）需要在webapck config文件中设置VueLoaderPlugin插件，
    const { VueLoaderPlugin } = require('vue-loader');
    plugins: [        
        // 添加VueLoaderPlugin，以响应vue-loader         
        new VueLoaderPlugin()  
    ],
    ```
    
1. npm i babel-loader babel-preset-env -D

    ````
    创建一个用于babel调用的文件，名为.babelrc：
    {
    	"presets": [
    		"env"
    	],
    	"plugins": []
    }
    ````
    这里配置的env需要babel-preset-env这个模块；
    
    或者直接在webpack配置文件里面加上rules

    ````
    test:/\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            ['env']
        ]
    }
    ````


### 路由配置

