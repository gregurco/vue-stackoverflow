<template>
  <div>
    <p>Counter: {{ counter }} (next will be {{ nextValue }})</p>

    <button @click="counter += 1">Increase</button>
    <button @click="counter -= 1">Decrease</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    nextValue () {
      return this.counter + 1
    }
  },
  watch: {
    'counter' (newValue) {
      console.log(`Value was changed. New value is: ${newValue}`)
    }
  }
}
</script>

<style scoped>

</style>
