<template class="bugList">
  <ul class="bug-list">
    <li class="clearfix">
      <!-- <a v-link="{ name: 'site', params: { id: item.media }}" class="pull-left" href="#">{{item.disp}}</a>
      <span>
      <a v-on:click="showInfo(item.media)">查看</a><a v-link="{ name: 'ChartMedia', params: { id: item.media }}">报告<em></em></a>
      </span> -->
      <a class="buglist-pull-left" v-link="{ name: 'BugInfo'}" href="#">优酷某系统未授权访问可入内网</a>
      <span class="goto-buginfo">
        <a v-link="{ name: 'BugInfo'}" href="#">详情<em></em></a>
      </span>
      <span class="data">2015-12-18</span>
    </li>
    <li class="clearfix">
      <a class="buglist-pull-left" href="#">管家帮某站漏洞导致Getshehll(跑马场几十个Shell涉及100W+各种用户数据包括密码\身份证\职业\联系方式等)</a>
      <span class="goto-buginfo">
        <a>详情<em></em></a>
      </span>
      <span class="data">2015-12-18</span>
    </li>
  </ul>
  <!-- <nav>
    <ul class="pagination">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav> -->
</template>
<style lang="less">
@borderColor:#d9d9d9;
.bug-list {
  border-top:1px solid #d9d9d9;
  li{ 
    line-height:20px;
    padding-top:22px;
    border-bottom:1px solid @borderColor;
    .buglist-pull-left{ 
      display: inline-block;
      font-size:18px;
      font-weight:bolder;
      width: 600px;
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
    }
    .data{
      display: inline-block;
      width: 100%;
      margin: 10px 0 5px 0;
    }
    .goto-buginfo{ 
      float:right;
      a{ 
        padding-left:12px;
        padding-right:12px;
        border-left:1px solid @borderColor;
        &:first-child{ 
          border:none;
        }
      }
      em{
        display:inline-block;
        margin-left:10px;
        width:8px;
        height:14px;
        background:url("../img/goto.png") no-repeat;
     }
    }
  }
}

</style>
