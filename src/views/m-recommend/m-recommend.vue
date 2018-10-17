<template>
  <div class="m-recommend">
    <cube-slide :data="items"/>
  </div>
</template>

<script>
import { getSongList } from "api/recommend";
export default {
   data() {
    return {
      discList: [],
      items: [
        {
          // url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          // url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          // url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  created(){
    console.log("recommentd")
    this._getSongs();
  },
  methods:{
    _getSongs() {
      getSongList().then((res) => {
        console.log(res);
          if (res.code === ERR_OK) {
            this.discList = res.data.slider
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-recommend
  color:#fff;

  .cube-slide
    height:144px;

    .cube-slide-dots
      bottom:12px
      span
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: hsla(0,0%,100%,.5);
      
      
</style>
