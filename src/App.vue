<template>
  <div id="app">
    <c-nav></c-nav>
    <router-view ></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    'c-nav': Nav
  },
  route: {
    activate: function (transition) {
      if (transition.to.name === 'index') {
        transition.redirect({name: 'home'})
        return
      }
      transition.next()
    }
  }
}
</script>

<style lang="less">
@import "../node_modules/normalize.css/normalize.css";
*, :before, :after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html {
  min-height: 100%;
}
body {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  min-height: 100%;
}
#app {
}
</style>
