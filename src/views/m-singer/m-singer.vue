<template>
  <div class="m-singer">
    <cube-index-list
  :data="cityData"
  :title="title"
  @select="selectItem"
  @title-click="clickTitle"></cube-index-list>
  </div>
</template>

<script>
const cityData = [
  {
    name: "★Hot City",
    items: [
      {
        name: "BEIJING",
        value: 1
      },
      {
        name: "SHANGHAI",
        value: 2
      }
    ]
  },
  {
    name: "A",
    items: [
      {
        name: "ANSHAN",
        value: 3
      },
      {
        name: "ANQING",
        value: 4
      }
    ]
  }
];

export default {
  data() {
    return {
      title: "Current City: BEIJING",
      cityData: cityData
    };
  },
  created() {
    // console.log(this.title, this.cityData);
  },
  methods: {
    selectItem(item) {
      console.log(item.name);
    },
    clickTitle(title) {
      console.log(title);
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
