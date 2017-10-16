<template>
  <div class="home">
    <div class="login-wrap">
      <login-form />
    </div>
    <div class="list-wrap">
      <list />
    </div>
    <div class="option-wrap">
      <new-option />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import NewOption from './NewOption'
import List from './List'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { LoginForm, NewOption, List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {

  }
  .login-wrap, .option-wrap, .list-wrap {
    width: 90%;
    margin: 20px auto;
  }
</style>
