<template>
  <div>
    <no-ssr>
      <div>
        <div>
          Editing: {{ slug }}
        </div>
      <gpage editing="true"/>
      </div>
    </no-ssr>
  </div>
</template>
<script>
 import gpage from '@/components/Page'
 export default {
   components: {
     gpage,
   },
   computed: {
     slug() {
       return  '/' + this.$route.params[0]
     },
   }
 }
</script>
