module.exports = {
	user:{
		uid:{type:String,required:true},
        name:{type:String,required:true},
        pwd: {type:String, required:true},
        date:{type:Date, default:Date.now},
	},
    order:{
        id:{type:String, required:true},
        name:{type:String,required:true},
        group:{type:String},
        position: {type:String, required:true},
        date:{type:Date, default:Date.now},
        list:{type:Array, required:true},
        state:{type:Boolean,default: false}
    },
    bugList:{
        uid:{type:String, required:true},
        type:{type:String,required:true},
        school:{type:String,required:true},
        bugType:{type:String,required:true},
        title:{type:String,required:true},
        level:{type:String,required:true},
        miaoshu:{type:String,required:true},
        shuoming:{type:String,required:true},
        zhengming:{type:String,required:true},
        xiufu:{type:String,required:true},
        date:{type:Date, default:Date.now},
    },
    thing:{
        name:{type:String,required:true}
    },
    group:{
        name:{type:String,required:true}
    }
};