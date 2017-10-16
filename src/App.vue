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
  input:focus {
    outline: 0;
  }
  button {
    background-color: deeppink;
    padding: 5px 10px;
    border: 0;
    color: white;
    border-radius: 3px;
  }
  button:focus {
    outline: 0;
    cursor: pointer;
  }
</style>
