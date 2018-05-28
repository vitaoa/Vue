## 软件包管理器Bower
    
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


## webpack插件

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


## vue文件编译
    
1. 安装依赖：npm i vue-loader vue-template-compiler -D 

    ```
    最新版本的vue-loader（^15.0.10）需要在webapck config文件中设置VueLoaderPlugin插件，
    const { VueLoaderPlugin } = require('vue-loader');
    plugins: [        
        // 添加VueLoaderPlugin，以响应vue-loader         
        new VueLoaderPlugin()  
    ],
    ```
1. 解说：vue-loader是一个webpack的loader，可以将vue文件转换为JS模块
  

## babel的几种使用方法
1. 使用webStorm自带的file watcher中的babel自动编译
    
   **建议安装在本地：npm install --save-dev babel-cli，用于命令行转码**，可以单独编译es6，babel-loader及其规则rules可以去掉。
   
   需要设置的地方有三个，Program，Arguments,  Output paths to refresh
   
   1. Program：（如果是全局安装babel-cli的，这里默认就好了。如果是项目安装的，就要右边的...到项目的node_modules文件夹中，找到.bin文件夹下面的babel文件，点ok就可以了）
        node_modules\.bin\babel.cmd
   1. Arguments：默认为： $FilePathRelativeToProjectRoot$ --out-dir dist --source-maps --presets env 
   1. Output paths to refresh: 默认为：dist\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js:dist\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js.map
    
   1. 填坑：
        1. 编译其实并没有进行，而是原样输出：
        
            安装：babel-preset-env，然后创建一个用于babel调用的文件，名为.babelrc：
            ````
            {
                "presets": [
                    "env"
                ]
            }
            ````
        
1. 使用webpack的loader

    npm i babel-loader babel-preset-env -D
    
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

1. 使用npm的scripts(推荐)

    ```
    "babel":"babel --watch ./src/babel -d ./app/js -s"
    ```


## vue路由配置

