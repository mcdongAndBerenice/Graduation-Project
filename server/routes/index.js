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

/* GET login page. */
router.route("/login").get(function(req, res) { // 到达此路径则渲染login文件，并传出title值供 login.html使用
	res.render("login", {
		title: '用户登录'
	});
}).post(function(req, res) { // 从此路径检测到post方式则进行post数据的处理操作
	//get User info
	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	var User = global.dbHandel.getModel('user');
	var postData = req.body; //获取post上来的 data数据中 uname的值
	User.findOne({
		email: postData.email
	}, function(err, doc) { //通过此model以用户名的条件 查询数据库中的匹配信息
		if (err) { //错误就返回给原post处（login.html) 状态码为500的错误
			res.send(500);
			console.log(err);
		} else if (!doc) { //查询不到用户名匹配信息，则用户名不存在
			req.session.error = '用户名不存在';
			console.log('用户名不存在')
			// res.send(404); //	状态码返回404
			//	res.redirect("/login");
		} else {
			if (req.body.id != doc.id) { //查询到匹配用户名的信息，但相应的password属性不匹配
				req.session.error = "信息错误";
				res.send(404);
				//	res.redirect("/login");
			} else { //信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功
				req.session.user = doc;
				// req.cookies.user = doc;
				res.cookie('data', doc)
				res.send(200);
				//	res.redirect("/home");
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
					res.json({error: 1, content: '用户名创建失败！'})
					req.session.user = doc
					// req.session.error = '用户名创建成功！';
					// res.send(200);
				}
			});
		}
	});
});



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