<template>
  <div>
    <no-ssr>
      <div>
        <div>
          Editing: {{ slug }}
        </div>
      <glayout :data="page_data"> </glayout>
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
 import main from '@/content/main.js'

 export default {
   components: {
     glayout,
   },
   data() {
     return {
       page_data: main
     }
   }, // data
   computed: {
     slug() {
       return  '/' + this.$route.params[0]
     }
   }
 }


</script>
