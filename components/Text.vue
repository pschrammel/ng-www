<template>
  <div>
    {{data.text}}
  </div>
</template>

<script>
 export default {
   props: {
     data: {
       type: Object,
       default: function() {
         return {text: "Lots of text"}
       }
     },
     ctx: {
       type: Object,
     },
   }
 }
</script>
