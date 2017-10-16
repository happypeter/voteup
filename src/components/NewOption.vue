<template>
  <div class='new-option'>
    <input v-model="text" />
    <button @click="addOption">添加</button>
  </div>
</template>

<script>
  export default {
    name: 'new-option',
    data: function () {
      return {
        text: ''
      }
    },
    methods: {
      addOption: function () {
        console.log(this.text)
        this.$store.dispatch({
          type: 'addOption',
          text: this.text
        })
        this.text = ''
      }
    }
  }
</script>

<style scoped>
  .new-option {
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

  button {
    background-color: deeppink;
    color: white;
    padding: 5px 10px;
    border: 3px;
  }
</style>
