<template>
  <div id="app" @click="hideContextMenu()">
    <v-header></v-header>
    <div class="page_body">
        <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './views/layout/header.vue'
import note from './views/note.vue'
import footer from './views/layout/footer.vue'
export default {
  data () {
    return {}
  },
  methods:{
    hideContextMenu: function() {
      $(".context-menu").removeClass("show");
    }
  },
  components:{
    'v-note':note,
    'v-header':header,
    'v-footer':footer
  }
}
</script>

<style>

</style>
