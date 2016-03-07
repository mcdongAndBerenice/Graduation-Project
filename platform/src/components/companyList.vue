<template>
  <ul class="list">
    <li class="clearfix">
      <!-- <a v-link="{ name: 'site', params: { id: item.media }}" class="pull-left" href="#">{{item.disp}}</a>
      <span>
      <a v-on:click="showInfo(item.media)">查看</a><a v-link="{ name: 'ChartMedia', params: { id: item.media }}">报告<em></em></a>
      </span> -->
      <a class="pull-left">腾讯</a>
      <span class="goto-buginfo">
        <a title="http://www.tencent.com" href="http://www.tencent.com">详情<em></em></a>
      </span>
      <span class="data">2015-12-18</span>
    </li>
    <li class="clearfix">
      <a class="pull-left">百度</a>
      <span class="goto-buginfo">
        <a title="http://www.baidu.com" href="http://www.baidu.com">详情<em></em></a>
      </span>
      <span class="data">2015-12-18</span>
    </li>
  </ul>
  <nav>
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
  </nav>
</template>
<style lang="less">
@borderColor:#d9d9d9;
.list {
  border-top:1px solid #d9d9d9;
  li{ 
    line-height:20px;
     padding:22px 0;
     border-bottom:1px solid @borderColor;
    .pull-left{ font-size:18px;
     font-weight:700;
     float:left;
    }
    .data{
      display: inline-block;
      width: 100%;
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
