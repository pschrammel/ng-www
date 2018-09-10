<template>
  <div>
    <glayout :data="pageLayout"> </glayout>
  </div>
</template>
<style>
 .grid-item {
   background-color: #aaaaaa;
 }
</style>
<script>
 import glayout from '@/components/Layout'
 import pages from '@/content/main.js'

 export default {
   components: {
     glayout,
   },
   data() {
     return {
       pageLayout: {}
     }
   },
   computed: {
     slug() {
       return  '/' + this.$route.params[0]
     },
   },

   created() { //this is done in backend!
     var loadPageLayout=pages[this.slug]
     if (loadPageLayout)  {
       this.pageLayout=loadPageLayout;
     } else {
       this.pageLayout=pages['404']
     }
   }
 }

</script>
