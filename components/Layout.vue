<template>
  <grid-layout
      :layout="data.layout"
      :col-num="data.col_num"
      :row-height="data.row_height"
      :is-draggable="isDraggable"
      :is-resizable="isResizable"
      :responsive="responsive"
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
      <div v-if="ctx.editing" style="position: absolute; bottom: 0px; left: 4px;">
        <i class="glyphicon glyphicon-trash" aria-hidden="true"></i>
      </div>
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

 export default {
   name: 'glayout',

   components: {

   },
   computed: {
     responsive() {
       var result=!!(this.editing && this.data.responsive);
       console.log("Responsive", result);
       return result
     },
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
