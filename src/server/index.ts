import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import cookieParser = require('cookie-parser');
// import * as io from 'socket.io';
// import { Scheduler } from "./cmd/index";
import * as dotenv from 'dotenv';
import * as webpack from 'webpack';
let webpackDevMiddleware = require('webpack-dev-middleware-hard-disk');
import * as webpackHotMiddleware from 'webpack-hot-middleware';

//config env
dotenv.config({ path: path.join(__dirname, `./.env.${process.env.ENV}`) });

// Scheduler.injectCmd();

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(compression());

if (process.env.ENV == 'dev') {
    let webpackDevConfig = require('../../webpack.config.js');
    var compiler = webpack(webpackDevConfig);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '../../dist')));

//初始化路由
let routes = require('./routes');
routes.init(app);

app.listen(3001, () => {
    console.log('App is listening on port:' + 3001);
});

process.on('uncaughtException', function (err: any) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack);
});