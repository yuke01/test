<template>
  <div id="app">
    <router-view />
    <loding />
  </div>
</template>
<script>
import loding from '@/components/loding.vue'
export default {
  components: {
    loding
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
