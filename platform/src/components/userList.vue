<template>
  <div class="userList">
    <table class="userInfoList">
      <thead>
        <tr>
          <th class="user-date">注册日期</th>
          <th class="user-name">昵称</th>
          <th class="user-level">等级</th> 
          <th class="submit-bugNum">提交漏洞数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td class="user-date">{{item.date}}</td>
          <td class="user-name">{{item.disp}}</td>
          <td class="user-level">{{item.level}}</td>
          <td class="submit-bugNum">{{item.bugNum}}</td>
        </tr>        
      </tbody>
    </table>
  </div>
</template>
<style lang="less">
@import url("../less/userList.less");
</style>
<script>
export default{
  name: 'userList',
  data(){
    return {
      items: []
    }
  },
  methods:{
    sortList:function (sortBy, list) {
      return list.sort(function(a, b){
        return (a[sortBy] - b[sortBy]); 
      })
    },
    getUserList:function(){
      //获取列表
    }
  },
  ready:function(){

  }
}
</script>
