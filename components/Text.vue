<template>
  <div style="height: 100%">
    <div v-if="ctx.editing" class="editing" >
      <i v-if="true" class="glyphicon glyphicon-option-vertical"></i>
      <i v-if="true" class="glyphicon glyphicon-pencil"></i>
    </div>
    <textarea v-model="data.text" v-if="ctx.editing" @blur="save">
    </textarea>
    <template v-if="!ctx.editing">
      {{data.text}}
    </template>
  </div>
</template>
<style scoped>
 textarea {
   resize: none;
   width: 100%;
   height: 100%;
   background-color: transparent;
   border: 0;
 }

 .editing {
   position: absolute;
   right: 4px;
   top: 2px;
 }
</style>

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
   },
   methods: {
     save() {
       console.log("saving text:", this.data.text )
     }
   }
 }
</script>
