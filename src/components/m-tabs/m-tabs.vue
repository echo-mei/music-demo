<template>
  <div class="m-tabs">
    <router-link to="/recommend" tag="div" class="tab-item"><span class="tab-link">推荐</span></router-link>
    <router-link to="/singer" tag="div" class="tab-item"><span class="tab-link">歌手</span></router-link>
    <router-link to="/rank" tag="div" class="tab-item"><span class="tab-link">排行</span></router-link>
    <router-link to="/search" tag="div" class="tab-item"><span class="tab-link">搜索</span></router-link>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-tabs {
  display:flex;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
  .tab-item{
    flex:1;
    .tab-link{
      padding-bottom:5px;
      color: hsla(0,0%,100%,.5);
    }
    &.active{
      .tab-link{
        color: #ffcd32;
        border-bottom: 2px solid #ffcd32;
      }
    }
  }
}
</style>
