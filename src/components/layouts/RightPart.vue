<template>
  <div class="right-part">
    <LastUserWidget />
  </div>
</template>
<script>
import LastUserWidget from '@/components/User/LastUserWidget'
export default {
  components: {
    LastUserWidget
  }
}
</script>
<style  lang="scss" scoped>
  .right-part{
    margin:10px
  }
</style>
