<template>
  <div id="app">
    <router-view />
    <!-- <HomeBox @yk="yk11"> </HomeBox> -->
  </div>
</template>
<script>
import loding from '@/components/loding.vue'
import HomeBox from '@/components/home.vue'
export default {
  components: {
    loding,
    HomeBox
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
