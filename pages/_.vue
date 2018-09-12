<template>
  <div>
    <gpage :ctx="ctx"/>
  </div>
</template>

<script>
 import gpage from  '@/components/Page'
 import pageHandler from '@/libs/PageHandler';
 export default {
   components: {
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
</script>
