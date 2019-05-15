<template>
  <div id="foo">
    Foo

    <counter />
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  name: 'Foo',
  components: { Counter }
}
</script>

<style scoped>
  #foo {
    height: 200px;
    background-color: red;
  }
</style>
