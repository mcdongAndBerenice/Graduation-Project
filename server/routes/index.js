var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
	if(req.cookies.data){
		res.render('apply', {
			title: '申请',
			data: req.cookies.data
		}); // 到达此路径则渲染index文件，并传出title值供 index.html使用
	}else{
		res.render('login', {
			title: '登录'
			// data: req.cookies.data
		}); // 到达此路径则渲染index文件，并传出title值供 index.html使用
	}
});

router.post('/edit', function(req, res, netx) {
	var User = global.dbHandel.getModel('user')
	var req = req
	User.update({_id : req.cookies.data._id}, {$set:{position : req.body.position}}, function(err, doc){
		if(!err){
			User.find({_id : req.cookies.data._id}, function(err, doc){
				console.log(doc, '===================')
				res.cookie('data', '')
				res.cookie('data', doc[0])
				res.send(200)
			})
		}else{
			res.send(500)
		}
	})
})

router.post('/remove', function(req, res, netx) {
	var Thing = global.dbHandel.getModel('thing')
	var Group = global.dbHandel.getModel('group')
	if(req.body.type == 't'){
		Thing.remove({name: req.body.name}, function(err, doc){
			if(err){
				res.send('500')
			}else{
				res.send('200')
			}
		})
	}else{
		Group.remove({name: req.body.name}, function(err, doc){
			if(err){
				res.send('500')
			}else{
				res.send('200')
			}
		})
	}
})

router.get('/apply', function(req, res, netx) {
	console.log(req.cookies.data)
	if(req.cookies.data){
		res.render('apply', {
			title: '办公物品申请',
			data: req.cookies.data
		})
	}else{
		res.render('login', {title: '登录'})
	}
})

router.get('/workList', function(req, res, netx) {
	// console.log(req.cookies.data)
	res.render('workList', {
		title: '办公物品申请'
		// data: req.cookies.data
	})
})

router.route('/list').post(function(req, res){
	var Thing = global.dbHandel.getModel('thing')
	Thing.find(function(err, doc){
		console.log(doc)
		res.json(doc)
	})
})

router.route('/groupList').post(function(req, res){
	var Group = global.dbHandel.getModel('group')
	Group.find(function(err, doc){
		console.log(doc)
		res.json(doc)
	})
})

router.route('/workDone').post(function(req, res){
	var Order = global.dbHandel.getModel('order')
	Order.update({_id : req.body._id}, {$set:{state : true}}, function(err, doc){
		// console.log(err, doc)
		res.json(doc)
	})
})

router.route("/add").get(function(req, res){
	res.render('add', {
		title: '办公物品添加'
	})
}).post(function(req, res) {
	var Thing = global.dbHandel.getModel('thing')
	var name = req.body.name
	Thing.create({
		name: name
	}, function(err, doc) {
		if (err) {
			res.send(500);
			console.log(err)
		} else {
			req.session.error = '物品创建成功！'
			res.send(200);
		}
	})
})

router.route("/addGroup").post(function(req, res) {
	var Thing = global.dbHandel.getModel('group')
	var name = req.body.name
	Thing.create({
		name: name
	}, function(err, doc) {
		if (err) {
			res.send(500);
			console.log(err)
		} else {
			req.session.error = '部门创建成功！'
			res.send(200);
		}
	})
})

router.route("/order").post(function(req, res) {
	var Order = global.dbHandel.getModel('order')
	var id = req.body.id
	var state = req.body.state
	Order.find({
		id: id,
		state: state
	}, function(err, doc) {
		if(err){
			res.send(500);
			console.log(err, '订单查询失败')
		}else {
			console.log(doc, '订单查询成功')
			res.json(doc)
		}
	})
})

router.route("/orderAll").post(function(req, res) {
	var Order = global.dbHandel.getModel('order')
	var state = req.body.state
	Order.find({
		state: state
	}, function(err, doc) {
		if(err){
			res.send(500);
			console.log(err, '订单查询失败')
		}else {
			console.log(doc, '订单查询成功')
			res.json(doc)
		}
	})
})

router.route("/orderApply").post(function(req, res) {
	var Order = global.dbHandel.getModel('order')
	var postData = req.body
	console.log(req.cookies)
	Order.create({ // 创建一组user对象置入model
		id: req.cookies.data.id,
		name: req.cookies.data.name,
		position: req.cookies.data.position,
		group: req.cookies.data.group,
		list: postData.list
	}, function(err, doc) {
		if (err) {
			res.send(500);
			console.log(err);
		} else {
			console.log(doc)
			req.session.error = '订单创建成功！';
			res.send(200);
		}
	});
})

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
				res.cookie('user', doc)
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

/* GET home page. */
router.get("/home", function(req, res) {
	if (!req.session.user) { //到达/home路径首先判断是否已经登录
		req.session.error = "请先登录"
		res.redirect("/login"); //未登录则重定向到 /login 路径
	}
	res.render("home", {
		title: 'Home'
	}); //已登录则渲染home页面
});

/* GET logout page. */
router.get("/logout", function(req, res) { // 到达 /logout 路径则登出， session中user,error对象置空，并重定向到根路径
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

module.exports = router;