<template>
<div id="p-home">
  <c-hello></c-hello>
  <div>
    我是 Home page
  </div>
</div>
</template>

<script>
import Hello from '../components/Hello.vue'

export default {
  components: {
    // 'c-header': require('../components/Header.vue')
    'c-hello': Hello
  }
}
</script>

<style>
</style>
