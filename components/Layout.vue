<template>
  <grid-layout
      :layout="data.layout"
      :col-num="data.col_num"
      :row-height="data.row_height"
      :is-draggable="isDraggable"
      :is-resizable="isResizable"
      :vertical-compact="data.vertical_compact"
      :margin="data.margins"
      :use-css-transforms="data.user_css_transforms"
  >
    <grid-item class="grid-item" v-for="item in data.layout"
               :key="item.i"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
    >
      <component v-bind:is="item.type" :ctx="ctx" :data="item.data"/>
    </grid-item>
  </grid-layout>
</template>
<stlye>
  .grid-item {
     border: 1px green solid;
  }
</stlye>
<script>
 import gheader from './Header'
 import gtext from './Text'

 export default {
   name: 'glayout',

   components: {
     gtext,
     gheader,
   },
   computed: {
     isDraggable() {
       var result=!!(this.editing && this.data.is_draggable);
       console.log("Draggable", result, this.data );
       return result
     },
     isResizable() {
       var result=!!(this.editing && this.data.is_resizable);
       console.log("Resizable", result );
       return result
     },
     editing() {
       return this.ctx.editing;
     }
   },

   props: {
     ctx: {
       type: Object,
     },
     data: {
       type: Object,
     },
   }
 }
</script>
