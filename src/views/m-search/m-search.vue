<template>
  <div class="m-search">
    <div class="search-box-wrapper">
      <div class="search-box">
        <i class="icon-search"></i>
        <input placeholder="搜索歌曲、歌手" class="box" @input="search(keywords)" v-model="keywords">
        <i class="icon-dismiss"></i>
      </div>
    </div>
    <div class="shortcut-wrapper">
      <cube-scroll>
        <div class="hot-search" v-if="!searchFlag">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li
              class="item"
              v-for="(item,index) in hotSearchList.slice(0,10)"
              :key="index"
            >{{item.k}}</li>
          </ul>
        </div>
        <div class="res-search" v-if="searchFlag">
          <ul>
            <li v-if="searchRes.zhida" :key="index">
              <div class="icon">
                <i :class="getIconCls(searchRes.zhida)"></i>
              </div>
              <div class="name">
                <p class="text">{{searchRes.zhida.singername}}</p>
              </div>
            </li>
            <li v-for="(item,index) in searchRes.song.list" :key="index">
              <div class="icon">
                <i :class="getIconCls(item.type)"></i>
              </div>
              <div class="name">
                <p class="text">{{item.songname}}-{{item.singer[0].name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getHotSearchList, getSearchResult } from "api/search";

export default {
  data() {
    return {
      keywords: "",
      page: 1,
      hotSearchList: [],
      searchRes: {},
      searchFlag: false
    };
  },
  created() {
    this._getHotSearchList();
  },
  methods: {
    _getHotSearchList() {
      getHotSearchList().then(res => {
        this.hotSearchList = res.data.hotkey;
      });
    },
    _getSearchResult() {
      getSearchResult(this.keywords, this.page).then(res => {
        this.searchRes = res.data;
        this.searchFlag = true;
      });
    },
    search(keywords) {
      this._getSearchResult();
    },
    getIconCls(item) {
      if (item.type === 2) {
        return "icon-mine";
      } else {
        return "icon-music";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-search {
  height: calc(100% - 88px);
  overflow: auto;
  color: #fff;

  .search-box-wrapper {
    margin: 20px;

    .search-box {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding: 0 6px;
      height: 40px;
      background: #333;
      border-radius: 6px;

      .icon-search {
        font-size: 24px;
        color: hsla(0, 0%, 100%, 0.3);
      }

      .box {
        flex: 1;
        margin: 0 5px;
        line-height: 18px;
        background: #333;
        color: #fff;
        font-size: 14px;
        outline: 0;
      }

      .icon-dismiss {
        font-size: 16px;
        color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }

  .shortcut-wrapper {
    height: calc(100% - 80px);
    width: 100%;

    .hot-search {
      margin: 0 20px 20px;
      text-align: left;

      .title {
        margin-bottom: 20px;
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.5);
      }

      .item {
        display: inline-block;
        padding: 5px 10px;
        margin: 0 20px 10px 0;
        border-radius: 6px;
        background: #333;
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.3);
      }
    }

    .res-search {
      ul {
        padding: 0 30px;

        li {
          display: flex;
          align-items: center;
          padding-bottom: 20px;
          text-align: left;

          .icon {
            flex: 0 0 30px;
            width: 30px;

            [class^=icon-] {
              font-size: 14px;
              color: hsla(0, 0%, 100%, 0.3);
            }
          }

          .name {
            flex: 1;
            font-size: 14px;
            color: hsla(0, 0%, 100%, 0.3);
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
