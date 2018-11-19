<template>
  <div id="app">
    <m-header></m-header>
    <m-tabs></m-tabs> 
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import MHeader from "components/m-header/m-header";
import MTabs from "components/m-tabs/m-tabs";

export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016
    };
  },
  components: {
    MHeader,
    MTabs
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
html,body{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
