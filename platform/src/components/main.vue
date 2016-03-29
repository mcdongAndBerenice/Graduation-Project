<template>
<div class="container">
  <div class="menu">
    <ul class="menu-list" id="menu">
      <li class="active"><a v-link="{ path: '/BugList' }">漏洞列表</a></li>
      <li><a v-link="{ path: '/SubmitBug' }">提交漏洞</a></li>
      <li><a v-link="{ path: '/BugSummary' }">漏洞统计</a></li>
      <li><a v-link="{ path: '/UserList' }">白帽子列表</a></li>
      <li><a v-link="{ path: '/CompanyList' }">高校列表</a></li>
    </ul>
    <div class="user-info">
      <span>
        <a v-link="{ path: '/SignIn' }">登录</a>
        <a v-link="{ path: '/SignUp' }">注册</a>
      </span>
    </div>
  </div>
  <div class="content">
    <div class="content-float">
      <router-view
        class="view"
        transition
        transition-mode="out-in">
      </router-view>
    </div>
  </div>
</div>
</template>
<style lang="less">
@import url("../less/main.less");
</style>
