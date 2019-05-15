<template>
  <div id="app">
    <div>
      <router-link :to="{ name: 'foo' }">Foo</router-link> |
      <router-link :to="{ name: 'bar' }">Bar</router-link> |
    </div>

    <router-view />
  </div>
</template>

<style scoped lang="scss">
  #app {
    height: 700px;
    background-color: green;
  }
</style>
