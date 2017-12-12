<template>
  <div>
    <v-left></v-left>
    <div class="page_resize"></div>
    <v-right></v-right>
  </div>
</template>

<script>
import page_left from '../views/layout/left.vue'
import page_right from '../views/layout/right.vue'

export default {
  data () {
    return {}
  },
  components:{
    'v-left':page_left,
    'v-right':page_right
  }
}
</script>

<style>

</style>
