<template>
  <div class="m-rank">
    <cube-scroll>
      <ul class="toplist">
        <li v-for="(item,index) in rankList" :key="index" class="item">
          <div class="avatar">
            <img v-lazy="item.picUrl">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.songList" :key="index">
              <span>{{index+1}}.</span>
              <span>{{song.songname}}-{{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import { getRankList } from "api/rank";

export default {
  data() {
    return {
      rankList: []
    };
  },
  created() {
    this._getRankList();
  },
  methods: {
    _getRankList() {
      getRankList().then(res => {
        this.rankList = res.data.topList;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-rank {
  height: calc(100% - 88px);
  overflow: auto;
  color: #fff;

  .toplist {
    .item {
      display: flex;
      margin: 0 20px;
      padding-top: 20px;
      height: 100px;

      &:last-child {
        padding-bottom: 20px;
      }

      .avatar {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        background: #333;
        color: hsla(0, 0%, 100%, 0.3);
        font-size: 12px;

        .song {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height: 26px;
          text-align: left;
        }
      }
    }
  }
}
</style>
