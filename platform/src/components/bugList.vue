<template class="bugList">
  <ul class="bug-list">
    <li class="clearfix" v-for="item in items">
      <a class="buglist-pull-left" v-link="{ name: 'BugInfo', params: {id: item.bugNum}}" href="#">{{item.disp}}</a>
      <span class="goto-buginfo">
        <a v-link="{ name: 'BugInfo', params: {id: item.bugNum}}" href="#">详情<em></em></a>
      </span>
      <span class="data">{{item.date}}</span>
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
@import url("../less/bugList.less");
</style>
<script>
  export default{
    name: 'bugList',
    data(){
      return{
        items: []
      }
    },
    methods:{
      getBugList:function(){
        //获取漏洞列表
      }
    },
    ready:function(){
      
    }
  }
</script>
