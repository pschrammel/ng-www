<template>
  <grid-layout
      :layout="data.layout"
      :col-num="data.col_num"
      :row-height="data.row_height"
      :is-draggable="data.is_draggable"
      :is-resizable="data.is_resizable"
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
      <component v-bind:is="item.type" :data="item.data">
        {{item.i}}
      </component>
    </grid-item>
  </grid-layout>
</template>

<script>
 import gheader from './Header'
 import gtext from './Text'

 export default {
   name: 'glayout',

   components: {
     gtext,
     gheader,
   },
   props: {
     data: {
       type: Object,
       default: function() {
         return { layout: []}
       }
     }
   }
 }
</script>
