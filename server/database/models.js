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
    thing:{
        name:{type:String,required:true}
    },
    group:{
        name:{type:String,required:true}
    }
};