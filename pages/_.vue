<template>
  <div>
    <gpage :ctx="ctx"/>
  </div>
</template>

<script>
 import Vue from 'vue'
 import draggable from 'vuedraggable'
 import gpage from  '@/components/Page'
 import pageHandler from '@/libs/PageHandler';
 export default {
   components: {
     draggable,
     gpage,
   },
   data() {
     return {
       ctx: {}
     }
   },
   asyncData(context,callback) {
     pageHandler(context,callback,{})
   },
 }
  Vue.use(draggable)
</script>
