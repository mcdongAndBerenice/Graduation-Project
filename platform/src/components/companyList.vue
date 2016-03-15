<template>
  <div class="company-list">
    <a href="http://www.tjut.edu.cn/" target="view_window" class="logo"><img src="../img/tjut.jpg" alt="天津理工大学"></a>
  </div>
</template>
<style lang="less">
.company-list{
  .logo{
    display: inline-block;
    img{
      width: 180px;
    }
    margin-bottom: 10px;
    &:not(:nth-child(4n)){ 
      margin-right: 10px;
    }
  }
    
}

</style>
