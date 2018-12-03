<template>
  <div class="m-singer">

  </div>
</template>

<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";

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
          let data = res.data.list;
          this.singerList.push({});
          this.singerList[0].name = "热门";
          this.singerList[0].items = new Array();
          data.slice(0,10).forEach(item=>{
            this.singerList[0].items.push(item);
          });
          data.slice(10, data.length).forEach(item => {
            let flag = this.singerList.findIndex(jtem => {
              return item.Findex == jtem.name;
            });
            if (flag != -1) {
              this.singerList[flag].items.push(item);
            } else {
              this.singerList.push({});
              this.singerList[this.singerList.length - 1].name = item.Findex;
              this.singerList[this.singerList.length - 1].items = new Array();
              this.singerList[this.singerList.length - 1].items.push(item);
            }
          });
          this.singerList.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;
            if(nameA == "热门"){
              nameA = 1;
            }else if(nameB == "热门"){
              nameB = 1;
            }
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          console.log(this.singerList)
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-singer {
  height: 100%;
  color: #fff;

  .custom-item {
    position: relative;
    height: 70px;
    line-height: 70px;
    padding: 0 16px;
    font-size: 20px;
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
