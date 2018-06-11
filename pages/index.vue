<template>
  <div>
  <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="false"
      :is-resizable="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
  >

    <grid-item v-for="item in layout"
               :key="item.i"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i">
      <component v-bind:is="item.type">
        {{item.i}}
      </component>
    </grid-item>
  </grid-layout>
  </div>
</template>

<script>
 var testLayout = [
   {"x":0,"y":0,"w":2,"h":2,"i":"0",type: "gheader"},
   {"x":2,"y":0,"w":2,"h":4,"i":"1",type: "gtext"},
   {"x":4,"y":0,"w":2,"h":5,"i":"2",type: "gheader"},
   {"x":6,"y":0,"w":2,"h":3,"i":"3",type: "gheader"},
   {"x":8,"y":0,"w":2,"h":3,"i":"4",type: "gheader"},
   {"x":10,"y":0,"w":2,"h":3,"i":"5",type: "gheader"},
   {"x":0,"y":5,"w":2,"h":5,"i":"6",type: "gheader"},
   {"x":2,"y":5,"w":2,"h":5,"i":"7",type: "gheader"},
   {"x":4,"y":5,"w":2,"h":5,"i":"8",type: "gheader"},
   {"x":6,"y":4,"w":2,"h":4,"i":"9",type: "gheader"},
   {"x":8,"y":4,"w":2,"h":4,"i":"10",type: "gheader"},
   {"x":10,"y":4,"w":2,"h":4,"i":"11",type: "gheader"},
   {"x":0,"y":10,"w":2,"h":5,"i":"12",type: "gheader"},
   {"x":2,"y":10,"w":2,"h":5,"i":"13",type: "gheader"},
   {"x":4,"y":8,"w":2,"h":4,"i":"14",type: "gheader"},
   {"x":6,"y":8,"w":2,"h":4,"i":"15",type: "gheader"},
   {"x":8,"y":10,"w":2,"h":5,"i":"16",type: "gheader"},
   {"x":10,"y":4,"w":2,"h":2,"i":"17",type: "gheader"},
   {"x":0,"y":9,"w":2,"h":3,"i":"18",type: "gheader"},
   {"x":2,"y":6,"w":2,"h":2,"i":"19",type: "gheader"}
 ];

 export default {
   data() {
     return {
       layout: testLayout
     }
   }

 }


</script>
