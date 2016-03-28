<template>
  <div class="sign">
    <span class="sign-item">
      <label for="uid">帐 号：</label>
      <input type="text" id="uid" v-model="uid">
    </span>
    <span class="sign-item">
      <label for="name">昵 称：</label>
      <input type="text" id="name" v-model="name">
    </span>
    <span class="sign-item">
      <label for="pwd">密 码：</label>
      <input type="password" id="pwd" v-model="pwd">
    </span>
    <span class="sign-item">
      <label for="repwd">确认密码：</label>
      <input type="password" id="repwd" v-model="repwd">
    </span>
    <div class="tip"  v-if="pwdError">两次输入的密码不一致哦~</div>
    <!-- <div class="tip">帐号重复了哦~</div> -->
    <span class="sign-item">
      <a class="btn btn-submit" v-on:click="signUp">注 册</a>
      <a class="btn btn-link" v-link="{ path: '/SignIn' }">登 录</a>
    </span>
  </div>
</template>
<script>
export default {
  name: 'SignUp',

  data () {
   return{
    uid: "",
    name: "",
    pwd: "",
    repwd: "",
    pwdError: 0
   }
  },
  methods:{
    signUp:function(){
      if(this.pwd != this.repwd){
        this.pwdError = 1
        return
      }else{
        this.pwdError = 0
      }
      var t = this
      var data = {
        uid: t.uid,
        name: t.name,
        pwd: t.pwd
      }
      console.log(data)
      this.$http({url:'http://10.235.147.5:8080/register', method:'POST', data:data})
      .then(function(response){
        var data = response.data
        if(data.status == 0){
          console.log(data.content)
        }else{
          alert(data.content)
        }
      },function(response){
        //回调
      })
    }
  },
  ready : function(){
    this.$watch('repwd', function (val) {
      if(this.pwd == val){
        this.pwdError = 0
      }
    })
  }
}
</script>
<style lang="less">
@import url("../less/sign.less");
</style>
