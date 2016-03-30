<template>
  <div class="company-list">
    <a href="http://www.tjut.edu.cn/" target="view_window" class="logo"><img src="../img/tjut.jpg" alt="天津理工大学"></a>
  </div>
</template>
<style lang="less">
@import url("../less/companyList.less");
</style>
<script>
export default{
  name: 'CompanyList',
  data(){
    return{
    }
  },
  ready: function(){
    if(!GLOBAL.userName){
      this.$router.go({name:'SignIn'})
    }
  }
}
</script>
