<template>
  <div class="home">
    <div class="wrap">
      <login-form />
    </div>
    <div class="wrap">
      <list />
    </div>
    <div class="wrap">
      <new-option />
    </div>
    <div class="wrap">
      <result />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import NewOption from './NewOption'
import List from './List'
import Result from './Result'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { LoginForm, NewOption, List, Result }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {

  }
  .wrap {
    width: 90%;
    margin: 20px auto;
  }
</style>
