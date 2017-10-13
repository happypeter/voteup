<template>
  <div class='login-form'>
    你是
    <input />
  </div>
</template>

<script>
  export default {
    name: 'login-form'
  }
</script>

<style scoped>
  .login-form {
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    padding: 20px 10px;
  }
  input {
    border: 0;
    border-bottom: 1px solid #00bcd4;
    padding: 5px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
  input:focus {
    outline: 0;
  }
</style>
