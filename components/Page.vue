<template>
  <div>
    <glayout :data="pageLayout"> </glayout>
  </div>
</template>
<style>
 .grid-item {
   background-color: #aaaaaa;
 }
</style>
<script>
 import glayout from '@/components/Layout'
 import StaticPageRepo from '@/libs/StaticPageRepo';

 export default {
   components: {
     glayout,
   },
   data() {
     return {
       pageLayout: {layout:[]}
     }
   },
   computed: {
     slug() {
       return  '/' + this.$route.params[0]
     },
   },
   created() { //this is done in backend!
     var pageRepo=new StaticPageRepo
     pageRepo.load(this.slug).then(page => {
       //console.log("repo returned ", page)
       if (page) {
         this.pageLayout=page;
       } else {
         pageRepo.load('404').then(notFoundPage => {
           this.pageLayout=notFoundPage;
         })
       }
     })
   }
 }

</script>
