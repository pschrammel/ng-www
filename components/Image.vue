<template>
  <div style="height: 100%">
    <div v-if="ctx.editing" class="editing" >
      <i v-if="true" class="glyphicon glyphicon-option-vertical"></i>
      <i v-if="true" class="glyphicon glyphicon-pencil"></i>
    </div>
    <template  v-if="ctx.editing">
      <img :src="data.url"/>
      <input type="text" v-model="data.text" @blur="save"/>
    </template>
    <template v-if="!ctx.editing">
      <img :src="data.url"/>
      {{data.text}}
    </template>
  </div>
</template>
<style scoped>
 input {
   width: 100%;
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
       console.log("saving image:", this.data.text )
     }
   }
 }
</script>
