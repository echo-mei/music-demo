<template>
  <div class="m-singer">
    <cube-index-list :data="singerList">
      <cube-index-list-group v-for="(group, index) in singerList" :key="index" :group="group">
        <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item">
          <div class="custom-item">
            <div class="avatar">
              <img v-lazy="item.avatar">
            </div>
            <div class="cont">
              <h2 class="title">{{item.name}}</h2>
            </div>
          </div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/singer";
const HOT_SINGER_LEN = 10;
const HOT_NAME = "热门";

export default {
  data() {
    return {
      title: "Current City: BEIJING",
      singerList: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singerList = this._normalizeSinger(res.data.list);
        }
      });
    },
    _normalizeSinger(data) {
      let map = {
        hot: {
          name: HOT_NAME,
          items: []
        }
      };

      data.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            })
          );
        }
        let key = item.Findex;
        if (!map[key]) {
          map[key] = {
            name: key,
            items: []
          };
        }
        map[item.Findex].items.push(
          new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          })
        );
      });
      // 为了得到有序列表，我们需要处理 map:按照"热门"、"a-z"排列
      let hot = [];
      let ret = [];
      for (let key in map) {
        let item = map[key];
        if (item.name.match(/[a-zA-Z1-9]/)) {
          ret.push(item);
        } else if ((item.name = HOT_NAME)) {
          hot.push(item);
        }
      }
      ret.sort((a, b) => {
        return a.name - b.name;
      });
      return hot.concat(ret);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.m-singer {
  height: calc(100% - 88px);
  overflow: auto;
  color: #fff;

  .custom-item {
    display: flex;
    padding: 20px 0 0 30px;
    align-items: center;
    text-align: left;

    .avatar {
      flex: 0 0 50px;
      width: 50px;
      padding-right: 20px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .cont {
      flex: 1;

      .title {
        line-height: 20px;
        color: hsla(0, 0%, 100%, 0.5);
        font-size: 14px;
      }
    }
  }

  // 用自定义样式，覆写内置的默认样式
  .cube-index-list-content {
    background-color: #222;
    color: #909090;
  }

  .cube-index-list-anchor {
    background-color: #333;
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 20px;
    text-align: left;
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 12px;
  }

  .cube-index-list-group {
    padding-bottom: 30px;
  }

  .cube-index-list-nav {
    padding: 20px 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);

    &>ul {
      &>li {
        padding: 3px;
        font-size: 12px;
        color: #909090;

        &.active {
          color: #ffcd32;
        }
      }
    }
  }
}
</style>
