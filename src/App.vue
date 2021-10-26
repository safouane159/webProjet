<template>
  <div id="app">
    
    <listdesRestaurants msg=", You good ?"/>
  </div>
</template>

<script>
import listdesRestaurants from './components/ListRestaurants.vue'

export default {
  name: 'App',
  components: {
    listdesRestaurants
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
