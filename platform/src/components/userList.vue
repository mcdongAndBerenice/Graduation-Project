<template>
  <div class="userList">
    <table class="userInfoList">
      <thead>
        <tr>
          <th v-on:click="userSort('data')" class="user-date">注册日期<span class="sortTag">v</span></th>
          <th v-on:click="userSort('name')" class="user-name">昵称<span class="sortTag">v</span></th>
          <th v-on:click="userSort('level')" class="user-level">等级<span class="sortTag">v</span></th> 
          <th v-on:click="userSort('bugNum')" class="submit-bugNum">提交漏洞数<span class="sortTag">v</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td class="user-date">{{item.date}}</td>
          <td class="user-name">{{item.name}}</td>
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
    },
    userSort:function(tag){
      this.sortList(tag, this.items)
    }
  },
  ready: function(){
    if(!GLOBAL.userName){
      this.$router.go({name:'SignIn'})
    }
  }
}
</script>
