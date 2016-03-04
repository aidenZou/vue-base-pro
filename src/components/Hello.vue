<template>
  <div class="c-hello">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
// require('../assets/scss/iconfont/iconfont.css');
// import utils from '../libs/utils' // 加载公用函数
export default {
  data () {
    return {
      msg: '我是 components!'
    }
  },
  methods: {
    fun: function () {
      console.log('fun...')
    }
  },
  init: function () {
    console.log('init...')
  },
  created: function () {
    console.log('created...')
  }
}
</script>

<style lang="less" scoped>
.c-hello {
  color: red;
  background-color: rgba(0,0,0,.05);
}
</style>
