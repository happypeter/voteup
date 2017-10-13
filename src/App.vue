<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  body {
    background-color: #00bcd4;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
</style>
