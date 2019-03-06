<template>
  <div>
    <glayout :ctx="ctx" :data="ctx.page"> </glayout>
  </div>
</template>
<style>
 .grid-item {
   background-color: #aaaaaa;
 }
</style>
<script>
import Vue from 'vue'
 import draggable from 'vuedraggable'
 import glayout from '@/components/Layout';

 export default {
   components: {
     draggable,
     glayout,
   },
   props: {
     ctx: {
       type: Object
     }
   },
 }
 Vue.use(draggable)
</script>
