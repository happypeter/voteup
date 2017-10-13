<template>
  <div class="home">
    <div class="login-wrap">
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { LoginForm }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    border: 2px solid yellow;
  }
  .login-wrap {
    width: 90%;
    margin: 20px auto;
  }
</style>
