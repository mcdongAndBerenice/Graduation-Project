<template>
  <div class="sign">
    <h1>漏洞预警平台登录</h1>
    <br>
    <span class="sign-item">
      <input type="text" id="logInfo" placeholder="请输入帐号" v-model="uid" >
    </span>
    <span class="sign-item">
      <input type="password" id="pwd" placeholder="请输入密码" v-model="pwd">
    </span>
    <span class="sign-item">
      <a class="btn btn-submit" v-on:click="signIn">登 录</a>
    </span>
    <br>
    <a class="link" v-link="{ path: '/SignUp' }">没有帐号，前去注册 ></a>
  </div>
</template>
<style lang="less">
@import url("../less/sign.less");
</style>
<script>
  export default{
    name: 'SingIn',
    data () {
      return {
        uid: "",
        pwd: ""
      }
    },
    methods:{
      signIn: function(){
        var t = this
        if(t.uid&&t.pwd){
          var data = {
            uid: t.uid,
            pwd: t.pwd
          }
          this.$http({url:'http://10.235.147.5:8080/login', method:'POST', data:data})
          .then(function(response){
            var data = response.data
            if(data.error != 0){
              alert(data.content)
            }else{
              GLOBAL.userId = data.data.uid
              GLOBAL.userName = data.data.name
              this.$router.go({name: "BugList"})
            }
          },function(response){})
           
        }else{
          alert("请完整填写信息")
        }
      }
    },
    ready: function(){

    }
  }
</script>
