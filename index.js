var express = require('express');
var web = express();
var compression = require('compression');
var fs = require('fs');
setting = new Object();
if (fs.existsSync('./data') == false) {
    fs.mkdir('./data', function(err) {
        if (err) throw err;
        fs.mkdir('./data/players', function(err) {
            if (err) throw err;
            checkConfig()
        })
    })
} else {
    if (fs.existsSync('./data/players') == false) {
        fs.mkdir('./data/players', function(err) {
            if (err) throw err;
            checkConfig()
        })
    } else {
        checkConfig()
    }
}

function checkConfig() {
    var login = require('./script/login.js');
    var reg = require('./script/reg.js');
    fs.exists('./config.js', function(exists) {
        if (exists) {
            require('./config.js');
            openServer();
        } else {
            console.log('创建配置文件: config.js');
            var defaultSetting = '//配置文件\n\n//访问端口号\nsetting.port = 8081\n\n\n\nconsole.log("配置文件读取成功");'
            fs.writeFile('./config.js', defaultSetting, function(err) {
                if (err) throw err;
                require('./config.js');
                openServer();
            })
        }
    });
}

var SHA256 = require('./script/SHA256.js');


web.all(/json/, compression(), express.static('data/players'));

web.post(/upload/, function(req, res, next) {
    req.body.username
});

web.all(/indexcss/, compression(), function(req, res, next) {
    res.sendFile('index.css', {
        root: 'public/'
    });
});

web.all(/indexjs/, compression(), function(req, res, next) {
    res.sendFile('index.js', {
        root: 'public/'
    });
});

web.all(/favicon/, compression(), function(req, res, next) {
    res.sendFile('favicon.ico', {
        root: 'public/'
    });
});

web.all('/', compression(), function(req, res, next) {
    res.sendFile('index.html', {
        root: 'public/'
    });
});


function openServer() {
    var server = web.listen(setting.port, function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log('皮肤服务器开启 http://%s:%s', host, port);
    });
}