<template>
  <div class="m-recommend">
    <cube-slide ref="slide" :data="slideData">
      <cube-slide-item v-for="(item, index) in slideData" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </cube-slide-item>
      <template slot="dots" slot-scope="props">
        <span class="dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
      </template>
    </cube-slide>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
    </div>
  </div>
</template>

<script>
import { getSlide,getSongList } from "api/recommend";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      slideData: []
    };
  },
  created() {
    this._getSlide();
    this._getSongList();
  },
  methods: {
    _getSlide() {
      getSlide().then(res => {
          if (res.code === ERR_OK) {
            this.slideData = res.data.slider;
          }
        }
      );
    },
    _getSongList() {
      getSongList().then(res => {
        console.log(res);
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.m-recommend {
  color: #fff;

  .cube-slide {
    height: 144px;

    .cube-slide-dots {
      bottom: 12px;

      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: hsla(0, 0%, 100%, 0.5);

        &.active {
          width: 20px;
          border-radius: 5px;
          background: hsla(0, 0%, 100%, 0.8);
        }
      }
    }
  }

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: 14px;
      color: #ffcd32;
    }
  }
}
</style>
