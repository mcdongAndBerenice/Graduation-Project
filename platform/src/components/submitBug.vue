<template>
  <div class="submitBugs">
    <div class="headTitle">
      <p>提交漏洞</p>
    </div>
    <div class="submitBugsTip">你可以提交关于厂商的各种漏洞，不局限于传统意义上的产品漏洞，包括网络配置，服务器管理，钓鱼欺诈甚至是有证据的黑客事件都可以作为有效的信息提交</div>
    <form class="submitBugsInfo">
      <div class="submitBugsInfoItem">
        <label for="AppType" class="formTitle control-label">问题类型：</label>
        <div class="formReplay">
          <input type="radio" id="AppType" name="AppType" value="webApp" /> 互联网应用（如微博，网站，web邮箱等）
          <input type="radio" id="AppType" name="AppType" value="software" /> 通用性软件（如客户端浏览器，手机应用，开源cms等）
          <span class="submitTips">该漏洞对应厂商的类型</span>
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="companyName" class="formTitle control-label">问题厂商：</label>
        <div class="formReplay">
          <select name="companyRegion" id="companyRegion">
            <option value="">大陆地区</option>
            <option value="hongkong">香港地区</option>
            <option value="taiwan">台湾地区</option>
          </select>  
          <select name="companyName" id="companyName">
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
            <option value="other">其他厂商</option>
          </select>  
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="bugType" class="formTitle control-label">漏洞类型：</label>
        <div class="formReplay">
          <select name="bugType" id="bugType">
            <option value="">--选择漏洞大类--</option>
            <option value="6">网络设备/硬件设施</option>
            <option value="7">操作系统/系统服务</option>
            <option value="8">基础组件/开发框架</option>
            <option value="9">建站软件/web应用</option>
            <option value="10">常用软件/客户端应用</option>
            <option value="11">入侵事件/安全情报</option>
            <option value="0">其他类型</option>
          </select>
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="bugName" class="formTitle control-label">漏洞标题：</label>
        <div class="formReplay">
          <input type="text" id="bugName" name="bugName"/> 
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="bugLevel" class="formTitle control-label">漏洞等级：</label>
        <div class="formReplay">
          <select name="bugLevel" id="bugLevel">
            <option value="">低</option>
            <option value="">中</option>
            <option value="">高</option>
          </select>
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="bugDescription" class="formTitle control-label">问题描述：</label>
        <div class="formReplay">
          <textarea name="bugDescription" id="bugDescription"></textarea>
        </div>
      </div>
      <div class="submitBugsInfoItem">
        <label for="bugTag" class="formTitle control-label">标签：</label>
        <div class="formReplay">
          <input type="text" id="bugTag" name="bugTag">
        </div>
      </div>
      <div class="submitBtn">
        <button class="btn btn-primary">确定</button>
        <button class="btn btn-default">取消</button>
      </div>
    </form>
  </div>
</template>
<style lang="less">
.submitBugs{
  .submitBugsTip{
    width: 90%;
    margin-top: 20px;
    padding: 5px 0px 5px 30px;
    background-color: #eee;
  }
  .submitBugsInfo{
    margin: 30px auto;
    .formTitle{
      width: 20%;
      text-align: right;
      vertical-align: middle;
      padding-right: 10px;
    }
    .formReplay{
      display: inline-block;
      width: 70%;
    }
    .submitTips{
      margin-left: 10px;
      color: #888;
    }
    select{
      width: 20%;
      margin-right: 3%;
    }
    input[type="text"]{
      width: 60%;
    }
    textarea{
      width: 60%;
      height: 100px;
      resize: none;
    }
  }
}
.submitBugsInfoItem{
  margin: 20px 0px;
}
.submitBtn{
  margin-top: 20px;
  margin-left: 12%;
  .btn{
    width: 150px;
    margin: 0 5px;
  }
}
</style>
