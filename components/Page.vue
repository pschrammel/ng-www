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
 import glayout from '@/components/Layout';

 export default {
   components: {
     glayout,
   },
   props: {
     ctx: {
       type: Object
     }
   },
 }

</script>
