<template>
  <div id="app">
    <img src="./logo.png">
    <h1></h1>
    <h1>vfront link</h1>
    <ul>
      <li><a href="https://cn.vuejs.org/" target="_blank">Vue.js</a></li>
      <li><a href="https://vuex.vuejs.org/zh-cn/" target="_blank">Vuex</a></li>
      <li><a href="https://router.vuejs.org/zh-cn/" target="_blank">vue-router</a></li>
      <li><a href="https://www.iviewui.com/" target="_blank">iView</a></li>
    </ul>
    <ul>
      <li><a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank">axios</a></li>
      <li><a href="http://mockjs.com/" target="_blank">mockjs</a></li>
      <li><a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a></li>
      <li><a href="https://vue-loader.vuejs.org/zh-cn/" target="_blank">vue-loader</a></li>
    </ul>
    <h1>storybook link</h1>
    <ul>
      <li><a href="https://storybook.js.org/" target="_blank">storybook</a></li>
      <li><a href="https://github.com/storybooks/storybook/tree/master/addons/actions" target="_blank">addon-actions</a></li>
      <li><a href="https://github.com/storybooks/storybook/tree/master/addons/links" target="_blank">addon-links</a></li>
      <li><a href="https://github.com/storybooks/storybook/tree/master/addons/knobs" target="_blank">addon-knobs</a></li>
    </ul>
    <ul>
      <li><a href="https://github.com/tuchk4/storybook-readme" target="_blank">addon-readme</a></li>
      <li><a href="https://github.com/pocka/storybook-addon-vue-info" target="_blank">addon-vue-info</a></li>
      <li><a href="https://github.com/storybooks/storybook/tree/master/addons/options" target="_blank">addon-options</a></li>
      <li><a href="https://github.com/storybooks/storybook/tree/master/addons/centered" target="_blank">addon-centered</a></li>
      <li><a href="https://www.npmjs.com/package/@storybook/addon-viewport" target="_blank">addon-viewport</a></li>
    </ul>
    <h1>vue store</h1>
    <ul>
      <li><a href="https://madewithvuejs.com/" target="_blank">madewithvuejs</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><a href="https://devarchy.com/vue" target="_blank">devarchy</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
