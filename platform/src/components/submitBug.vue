<template>
  <div class="submitBugs">
    <span class="tagTitle">问题类型：</span>
    <input type="radio" id="web" value="web" v-model="submitType">
    <label for="web">互联网应用（如微博，网站，web邮箱等）</label>
    <input type="radio" id="app" value="app" v-model="submitType">
    <label for="app">通用性软件（如客户端浏览器，手机应用，开源cms等）</label>
    <br>
    <span class="tagTitle">问题高校：</span>
    <select v-model="schoolName">
      <option selected>A</option>
      <option>B</option>
      <option>C</option>
      <option value="other">其他厂商</option>
    </select> 
    <br>
    <span class="tagTitle">漏洞类型：</span>
    <select v-model="bugType">
      <option value="">--选择漏洞大类--</option>
      <option value="6">网络设备/硬件设施</option>
      <option value="7">操作系统/系统服务</option>
      <option value="8">基础组件/开发框架</option>
      <option value="9">建站软件/web应用</option>
      <option value="10">常用软件/客户端应用</option>
      <option value="11">入侵事件/安全情报</option>
      <option value="0">其他类型</option>
    </select>
    <br>
    <span class="tagTitle">漏洞标题：</span>
    <input type="text" v-model="bugName"/>
    <br>
    <span class="tagTitle">漏洞等级：</span>
    <select v-model="bugLevel">
      <option value="0">低</option>
      <option value="1">中</option>
      <option value="2">高</option>
    </select>
    <br>
    <span class="tagTitle">问题描述：</span>
    <textarea v-model="bugDescription"></textarea>
    <br>
    <span class="tagTitle">详细说明：</span>
    <textarea v-model="bugDetail"></textarea>
    <br>
    <span class="tagTitle">漏洞证明：</span>
    <textarea v-model="bugProve"></textarea>
    <br>
    <span class="tagTitle">漏洞修复：</span>
    <textarea v-model="bugFix"></textarea>
    <br>
    <button class="btn">确定</button>
    <button class="btn">取消</button>
  </div>
</template>
<style lang="less">
.submitBugs{
  font-size: 14px;
  textarea{
    resize: none;
  }
  input[select]{
    height: 35px;
  }
  .tagTitle{
    display: inline-block;
    width: 80px;
    line-height: 35px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
}
</style>
