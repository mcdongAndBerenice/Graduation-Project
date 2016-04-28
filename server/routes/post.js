var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('111111')
  res.send('respond with a resource');
});

router.route("/login").post(function(req, res) {
    var User = global.dbHandel.getModel('user');
    var postData = req.body;
    User.findOne({
        uid: postData.uid
    }, function(err, doc) {
        if (err) {
            res.json({error: 2, content: '网络异常错误!'})
            console.log('登录post接口网络异常错误!', err);
        } else if (!doc) {
            res.json({error: 1, content: '用户名不存在'})
            console.log('登录post接口用户名不存在!', err);
        } else {
            if (req.body.pwd != doc.pwd) {
                res.json({error: 3, content: '密码错误'})
                console.log('登录post密码错误!', err);
            } else {
                req.session.user = doc;
                res.cookie('user', doc, {domain: 'deer.com', path: '/', expires: new Date(Date.now() + 9999999999)})
                res.json({error: 0, content: '登录成功', data: {name: doc.name, uid: doc.uid}})
            }
        }
    });
});

router.route("/sameid").post(function(req, res) {
    var User = global.dbHandel.getModel('user');
    // var uname = req.body.uname;
    // var upwd = req.body.upwd;
    var postData = req.body
    console.log(postData)
    User.findOne({
        uid: postData.uid
    }, function(err, doc) { // 同理 /login 路径的处理方式
        if (err) {
            res.json({error: 2, content: '网络异常错误!'})
            console.log('注册post接口网络异常错误!', err);
            // res.send(500);
            // req.session.error = '网络异常错误!';
        } else if (doc) {
            res.json({error: 1, content: '用户名已存在!'})
            console.log('账户已存在')
            // req.session.error = '账户已存在！';
            // res.send(500);
        } else {
            res.json({error: 0, content: '用户名可以使用'})
            console.log('账户已存在')
        }
    });
})

router.route("/register").post(function(req, res) {
    //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
    var User = global.dbHandel.getModel('user');
    // var uname = req.body.uname;
    // var upwd = req.body.upwd;
    var postData = req.body
    console.log(postData)
    User.findOne({
        uid: postData.uid
    }, function(err, doc) { // 同理 /login 路径的处理方式
        if (err) {
            res.json({error: 1, content: '网络异常错误!'})
            console.log('注册post接口网络异常错误!', err);
            // res.send(500);
            // req.session.error = '网络异常错误!';
        } else if (doc) {
            res.json({error: 1, content: '用户名已存在!'})
            console.log('账户已存在')
            // req.session.error = '账户已存在！';
            // res.send(500);
        } else {
            User.create({ // 创建一组user对象置入model
                uid: postData.uid,
                name: postData.name,
                pwd: postData.pwd
            }, function(err, doc) {
                if (err) {
                    res.json({error: 1, content: '用户名创建失败！'})
                    console.log('用户名创建失败！', err);
                    // req.session.error = '用户名创建失败！';
                    // res.send(500);
                } else {
                    res.json({error: 0, content: '用户名创建成功！', data: {name: postData.name, uid: postData.uid}})
                    // req.session.user = doc
                    // req.session.error = '用户名创建成功！';
                    // res.send(200);
                }
            });
        }
    });
});

router.route("/addBug").post(function(req, res) {
    var bugList = global.dbHandel.getModel('bugList');
    var postData = req.body
    console.log(postData)
    bugList.create(postData, function(err, doc) {
        if (err) {
            res.json({error: 1, content: 'bug创建失败！'})
            console.log('用户名创建失败！', err);
        } else {
            res.json({error: 0, content: 'bug创建成功！'})
        }
    })
    console.log('ready==============================')
})

router.route("/bugList").post(function(req, res) {
    var pageSize = req.body.pageSize || 10
        ,pageIndex = req.body.pageIndex || 0
    var bugList = global.dbHandel.getModel('bugList');
    console.log(req.body)
    bugList.find({}, function(err, doc) {
        if (err) {
            res.json({error: 1, content: 'bug列表查询失败！'})
            console.log('bug列表查询失败！', err);
        } else {
            res.json({error: 0, content: 'bug列表读取成功！', data : doc.slice(pageIndex*pageSize, (pageIndex + 1)*pageSize)})
        }
    })
})

router.route("/useList").post(function(req, res) {
    var User = global.dbHandel.getModel('user');
    console.log(req.body)
    User.find({}, function(err, doc) {
        if (err) {
            res.json({error: 1, content: 'user列表查询失败！'})
            console.log('user列表查询失败！', err);
        } else {
            res.json({error: 0, content: 'user列表读取成功！', data : doc})
        }
    })
})

router.route("/bugDetail").post(function(req, res) {
    var bugList = global.dbHandel.getModel('bugList');
    console.log(req.body)
    bugList.find({_id : req.body.id}, function(err, doc) {
        if (err) {
            res.json({error: 1, content: 'bug详情查询失败！'})
            console.log('bug详情查询失败！', err);
        } else {
            res.json({error: 0, content: 'bug详情读取成功！', data : doc})
        }
    })
})

module.exports = router;
