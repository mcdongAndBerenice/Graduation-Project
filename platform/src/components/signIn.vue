<template>
  <div class="sign">
    <h1>漏洞预警平台登录</h1>
    <br>
    <span class="sign-item">
      <input type="text" id="logInfo" placeholder="请输入帐号">
    </span>
    <span class="sign-item">
      <input type="password" id="pwd" placeholder="请输入密码">
    </span>
    <span class="sign-item">
      <a class="btn btn-submit">登 录</a>
    </span>
    <br>
    <a class="link" v-link="{ path: '/SignUp' }">没有帐号，前去注册</a>
  </div>
</template>
<style lang="less">
@import url("../less/sign.less");
</style>
