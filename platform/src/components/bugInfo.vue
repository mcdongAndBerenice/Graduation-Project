<template>
  <div class="bugInfo">
    <div class="headTitle">
      <p>漏洞概要</p>
    </div>
    <div>
      <ul class="bugSummaryList">
        <li>缺陷编号：<span>WooYun-2015-163147</span></li>
        <li>漏洞标题：<span>爱卡汽车两处问题(绑定账号与任意解绑定)</span></li>
        <li>相关厂商：<span>爱卡汽车网</span></li>
        <li>漏洞作者：<span>路人甲</span></li>
        <li>提交时间：<span>2015-12-21 13:59</span></li>
        <li>公开时间：<span>2016-02-04 13:59</span></li>
        <li>漏洞类型：<span>CSRF</span></li>
        <li>危害等级：<span>高</span></li>
        <li>漏洞状态：<span>等待厂商处理</span></li>
        <li>漏洞来源：<span>http://www.wooyun.org</span></li>
        <li>Tags标签：<span>无</span></li>
      </ul>
    </div>
    <hr>
    <div class="headTitle">
      <p>漏洞详情</p>
    </div>
    <div>
      <ul class="bugDetailsList">
        <li>
          <span>披露状态：</span>
          <ul>
            <li>2015-12-21： 细节已通知厂商并且等待厂商处理中</li>
          </ul>
        </li>
        <li><span>简要描述：</span>
        <ul>
          <li>爱卡汽车两处问题(绑定账号与任意解绑定)</li>
        </ul>
        </li>
        <li><span>漏洞hash：</span>26863ecbb23db2b7a9711caac791ae0e</li>
        <li><span>版权声明：</span>转载请注明来源 路人甲@乌云</li>
      </ul>
    </div>
    <hr>
    <div class="headTitle">
      <p>漏洞回应</p>
    </div>
    <div class="companyResponse">
      <ul>
        <li><span>厂商回应：</span>
        <ul><li>暂无</li></ul>
      </li>
      </ul>
    </div>
    <hr>
    <div class="headTitle">
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
    </div>
  </div>
</template>
<style lang="less">
.bugInfo{
  ul{
    list-style-type: none;
  }
  .bugSummaryList{
    padding: 1% 3%;
    font-size: 14px;
    color: #333;
    &>li{
      height: 30px;
      line-height: 30px;
    }
    span{
      color: #555;
    }
  }
  .bugDetailsList{
    li{
      margin: 1%;
      color: #555;
    }
    span{
      display: inline-block;
      height: 20px;
      border-left: 3px solid #999;
      padding-left: 10px;
      color: #333;
    }
  }
  .companyResponse{
    li{
      margin: 1%;
      color: #555;
    }
    span{
      display: inline-block;
      height: 20px;
      border-left: 3px solid #999;
      padding-left: 10px;
      color: #333;
    }
  }
  .comments{
    margin: 1% 4%;
    li{
      height: 100px;
      padding: 10px;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      &:first-child{
        border-top: 1px solid #ddd;
      }
    }
    .addComments{
      width: 80%;
      margin: 4%;
      min-width: 400px;
      height: 100px;
      resize: none;
    }
    .btn{
      margin-left: 4%;
    }
  }
}
</style>
