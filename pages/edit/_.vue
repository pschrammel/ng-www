<template>
  <div>
    <no-ssr>
      <div>
        <div>
          Editing: {{ ctx.slug }}
        </div>
        <gpage :ctx="ctx" />
      </div>
    </no-ssr>
  </div>
</template>
<script>
 import gpage from '@/components/Page'
 import pageHandler from '@/libs/PageHandler';

 export default {
   components: {
     gpage,
   },
   asyncData(context,callback) {
     pageHandler(context,callback,{editing: true})
   },
 }
</script>
