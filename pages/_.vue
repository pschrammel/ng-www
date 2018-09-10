<template>
  <div>
    <glayout :data="page_data"> </glayout>
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
   } // data
 }


</script>
