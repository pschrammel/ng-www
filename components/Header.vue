<template>
  <h1 class="ghead">{{data.text}}</h1>
</template>
<style scoped>
 .ghead {
   border: 1px red solid;
 }
</style>
<script>
 export default {
   props: {
     data: {
       type: Object,
       default: function() {
         return {text: "Please set header"}
       }
     },
     ctx: {
       type: Object,
     },
   }
 }
</script>
