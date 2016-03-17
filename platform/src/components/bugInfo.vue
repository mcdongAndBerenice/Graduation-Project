<template>
  <div class="bugInfo">
    <div class="head-title">
      <p>漏洞概要</p>
    </div>
    <div>
      <ul class="bug-summaryList">
        <li>缺陷编号：<span>{{bugInfo.bugNum}}</span></li>
        <li>漏洞标题：<span>{{bugInfo.bugTitle}}</span></li>
        <li>相关高校：<span>{{bugInfo.schoolName}}</span></li>
        <li>漏洞作者：<span>{{bugInfo.userName}}</span></li>
        <li>提交时间：<span>{{bugInfo.submitDate}}</span></li>
        <li>公开时间：<span>{{bugInfo.publicDate}}</span></li>
        <li>漏洞类型：<span>{{bugInfo.bugType}}</span></li>
        <li>危害等级：<span>{{bugInfo.bugLevel}}</span></li>
        <li>漏洞状态：<span>{{bugInfo.bugStatus}}</span></li>
      </ul>
    </div>
    <div class="head-title">
      <p>漏洞详情</p>
    </div>
    <div>
      <ul class="bug-detailsList">
        <li>
          <span class="tag-title">披露状态：</span>
          <ul v-for="statusItem in statusItems">
            <li><span>{{statusItem.date}}：</span>{{statusItem.statusDetail}}</li>
          </ul>
        </li>
        <li>
          <span class="tag-title">简要描述：</span>
          <ul>
            <li>{{bugInfo.description}}</li>
          </ul>
        </li>
        <li>
          <span class="tag-title">漏洞hash：</span>{{bugInfo.hash}}
        </li>
        <li>
          <span class="tag-title">版权声明：</span>转载请注明来源 {{bugInfo.userName}}@xxx
        </li>
      </ul>
    </div>
    <div class="head-title">
      <p>漏洞回应</p>
    </div>
    <div class="school-response">
      <ul>
        <li>
          <span class="tag-title">高校回应：</span>
          <ul><li>暂无</li></ul>
      </li>
      </ul>
    </div>
    <!-- <div class="head-title">
      <p>评论</p>
    </div>
    <div class="comments">
      <p class="visible"  >登录后才能发表评论，请先 <a href="#">登录</a> 。</p>
      <div class=" ">
        <ul>
          <li>aaaaa</li>
          <li>aaawewwwaa</li>
          <li>aaasdfaasdfaa</li>
          <li>aaadsfsdafaa</li>
          <li>aaaaa</li>
        </ul>
        <textarea name="addComments" class="addComments"></textarea>
        <br>
        <button class="btn btn-primary">提交</button>
      </div>
    </div>  -->
  </div>
</template>
<style lang="less">
@import url("../less/bugInfo.less");
</style>
