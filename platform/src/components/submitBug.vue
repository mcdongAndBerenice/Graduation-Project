<template>
  <div class="submitBugs">
    <div class="submit-item">
      <span class="tagTitle">问题类型：</span>
      <input type="radio" id="web" value="web" v-model="submitType">
      <label for="web">互联网应用（如微博，网站，web邮箱等）</label>
      <input type="radio" id="app" value="app" v-model="submitType">
      <label for="app">通用性软件（如客户端浏览器，手机应用，开源cms等）</label>
    </div>
    <div class="submit-item">
    <span class="tagTitle">问题高校：</span>
    <select v-model="schoolName">
      <option value="">--选择问题高校--</option>
      <option value="天津理工大学">天津理工大学</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="other">其他高校</option>
    </select>
    </div>
    <div class="submit-item">
    <span class="tagTitle">漏洞类型：</span>
    <select v-model="bugType">
      <option value="">--选择漏洞大类--</option>
      <option value="网络设备/硬件设施">网络设备/硬件设施</option>
      <option value="操作系统/系统服务">操作系统/系统服务</option>
      <option value="基础组件/开发框架">基础组件/开发框架</option>
      <option value="建站软件/web应用">建站软件/web应用</option>
      <option value="常用软件/客户端应用">常用软件/客户端应用</option>
      <option value="入侵事件/安全情报">入侵事件/安全情报</option>
      <option value="其他类型">其他类型</option>
    </select>
    </div>
      <div class="submit-item">
      <span class="tagTitle">漏洞标题：</span>
      <input type="text" class="bug-name" v-model="bugName"/>
    </div>
    <div class="submit-item">
      <span class="tagTitle">漏洞等级：</span>
      <select v-model="bugLevel">
        <option value="">--选择漏洞等级--</option>
        <option value="低">低</option>
        <option value="中">中</option>
        <option value="高">高</option>
      </select>
    </div>
    <div class="submit-item">
      <span class="tagTitle">问题描述：</span>
      <textarea class="bug-description" v-model="bugDescription"></textarea>
    </div>
    <div class="submit-item">
      <span class="tagTitle">详细说明：</span>
      <textarea v-model="bugDetail"></textarea>
    </div>
    <div class="submit-item">
      <span class="tagTitle">漏洞证明：</span>
      <textarea v-model="bugProve"></textarea>
    </div>
    <div class="submit-item">
      <span class="tagTitle">漏洞修复：</span>
      <textarea v-model="bugFix"></textarea>
    </div>
    <div class="sumbit-btn">
      <button class="btn btn-submit" v-on:click="submit">确 定</button>
      <button class="btn btn-cancel" v-link="{ path: '/BugList' }">取 消</button>
    </div>
  </div>
</template>
<script>
export default{
  name: 'submitBugs',
  data () {
    return {
      submitType: "",
      schoolName: "",
      bugType: "",
      bugName: "",
      bugLevel: "",
      bugDescription: "",
      bugDetail: "",
      bugProve: "",
      bugFix: ""
    }
  },
  computed: { // 计算属性

  },
  methods : {
    submit: function(){
      this.send()
    },
    send: function(){
      var t = this
      var data = {
        uid: GLOBAL.userId,
        type: t.submitType,
        school: t.schoolName,
        bugType: t.bugType,
        title: t.bugName,
        level: t.bugLevel,
        miaoshu: t.bugDescription,
        shuoming: t.bugDetail,
        zhengming: t.bugProve,
        xiufu: t.bugFix
      }
      this.$http({
        url : '/post/addBug',
        method : 'POST',
        data : data
      }).then(function(response){
        //成功
        var data = response.data
        if(data.error == 1){
          alert(data.content)
        }else{
          alert(data.content)
          t.$router.go({name:'BugList'})
        }
      },function(response){})
    }
  },
  ready: function(){
    if(!GLOBAL.userName){
      this.$router.go({name:'SignIn'})
    }
  }
}
</script>
<style lang="less">
@import "../less/submitBug.less";
</style>
