<template>
  <nav class="c-nav">
    <ul>
      <li v-for="nav in navs" v-link="nav">{{ nav.name }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          name: 'home',
          params: {},
          append: true
        }, {
          name: 'about',
          params: {}
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.c-nav {
  @c-nav_height: 56px;
  // position: absolute;
  top: 0;
  width: 100%;
  height: @c-nav_height;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  z-index: 22;
  ul {    margin: 0;
    padding: 0;
    background: #4285f4;
    li {
      display: inline-block;
      height: 100%;
      line-height: @c-nav_height;
      padding: 0 30px;
      color: #fff;
      &.active {
      }
      &.v-link-active {
        background-color: #3262ba;
      }
    }
  }
}
</style>
