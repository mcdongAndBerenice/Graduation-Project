<template class="bugList">
  <ul class="bug-list">
    <li class="clearfix" v-for="item in items">
      <a class="buglist-pull-left" v-link="{ name: 'BugInfo', params: {id: item._id}}" href="#">{{item.title}}</a>
      <span class="goto-buginfo">
        <a v-link="{ name: 'BugInfo', params: {id: item._id}}" href="#">详情<em></em></a>
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
        items: [],
        index: 0
      }
    },
    methods:{
      getBugList:function(){
        var t = this
        //获取漏洞列表
        var data = {
          pageSize: 10,
          pageIndex: this.index
        }
        this.$http({url:'/post/bugList', method:'POST', data:data})
        .then(function(response){
          var data = response.data
          t.items = data.data
          for(var x in t.items){
            var tmp = t.items[x].date.split("T")
            t.items[x].date = tmp[0]
          }
        },function(response){})

      }
    },
    ready:function(){
      if(!GLOBAL.userName){
        this.$router.go({name:'SignIn'})
      }
      this.getBugList()
    }
  }
</script>
