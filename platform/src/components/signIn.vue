<template>
  <div class="sign">
    <span class="sign-item">
      <label for="logInfo">帐号：</label>
      <input type="text" id="logInfo">
    </span>
    <span class="sign-item">
      <label for="pwd">密码：</label>
      <input type="password" id="pwd">
    </span>
    <span class="sign-item">
      <a class="btn btn-submit">登 录</a>
      <a class="btn btn-link" v-link="{ path: '/SignUp' }">注 册</a>
    </span>
  </div>
</template>
<style lang="less">
@import url("../less/sign.less");
</style>
