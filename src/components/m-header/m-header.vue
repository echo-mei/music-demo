<template>
  <div class="m-header">
      <span class="logo"></span>
      <h1 class="title">Music</h1>
      <div class="mine">
          <i class="icon-mine"></i>
      </div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/mixin.less";

.m-header{
    font-size: 0;
    text-align: center;
    height: 44px;
    position: relative; 
    .logo{
        display: inline-block;
        vertical-align: middle;
        .bg-image('logo');
    }
    .title{
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
    }
    .mine{
        position: absolute;
        right: 0;
        top: 0;
        width: 44px;
        height: 100%;
        .icon-mine{
            font-size: 20px;
            color:#ffcd32;
        }
    }
}
</style>
