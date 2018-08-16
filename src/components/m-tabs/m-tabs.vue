<template>
  <div class="m-tabs">
    <ul></ul>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin.styl";

.m-header{
    font-size: 0;
    text-align: center;
    position: relative; 
    color:#ffcd32;
    .logo{
        width: 30px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        .bg-image('logo');
        background-size: 100%;
        margin-right: 10px;
    }
    .title{
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        line-height: 44px;
    }
    .mine{
        position: absolute;
        right: 0;
        top: 0;
        .icon-mine{
            display: block;
            font-size: 20px;
            color:#ffcd32;
            padding: 12px;
        }
    }
}
</style>
