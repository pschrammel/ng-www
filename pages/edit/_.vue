<template>
  <div>
    <no-ssr>
      <div>
        <div>
          Editing: {{ slug }}
        </div>
      <glayout :data="pageLayout"> </glayout>
      </div>
    </no-ssr>
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

     }
   }, // data
   computed: {
     slug() {
       return  '/' + this.$route.params[0]
     },
     pageLayout() {
       console.log("rendering:",`'${this.slug}'`)
       return pages[this.slug]
     }
   }
 }


</script>
