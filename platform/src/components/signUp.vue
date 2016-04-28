<template>
  <div class="sign">
    <h1>注册漏洞平台帐号</h1>
    <br>
    <span class="sign-item">
      <input type="text" id="uid" v-model="uid" placeholder="请输入帐号">
    </span>
    <span class="sign-item">
      <input type="text" id="name" v-model="name" placeholder="请输入昵称">
    </span>
    <span class="sign-item">
      <input type="password" id="pwd" v-model="pwd" placeholder="请输入密码">
    </span>
    <span class="sign-item">
      <input type="password" id="repwd" v-model="repwd" placeholder="请确认密码" debounce="500">
    </span>
    <div class="tip"  v-if="pwdError">两次输入的密码不一致哦~</div>
    <!-- <div class="tip">帐号重复了哦~</div> -->
    <span class="sign-item">
      <a class="btn btn-submit" v-on:click="signUp">注 册</a>
    </span>
    <a class="link" v-link="{ path: '/SignIn' }">已经有帐号了，前去登录 ></a>
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
        return
      }
      var t = this
      var data = {
        uid: t.uid,
        name: t.name,
        pwd: t.pwd
      }
      this.$http({url:'/post/register', method:'POST', data:data})
      .then(function(response){
        var data = response.data
        if(data.error == 0){
          this.$router.go({name: "SignIn"})
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
      }else{
        this.pwdError = 1
      }
    })
  }
}
</script>
<style lang="less">
@import url("../less/sign.less");
</style>
