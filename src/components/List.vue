<template>
  <div class="list">
    <div class="option" v-for="option in options">
      <h2>{{ option.text }}</h2>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'list',
    computed: {
      options: function () {
        return this.$store.state.vote.options
      }
    },
    created: function () {
      console.log('created')
      this.$store.dispatch({
        type: 'loadOptions'
      })
    }
  }
</script>

<style scoped>
  .option {
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    padding: 10px;
    margin-top: 15px;
    text-align: center;
  }

  .option h2 {
    margin: 0;
    font-size: 18px ;
    border: 2px solid #00bcd4;
    color: #00bcd4;
    display: inline-block;
    padding: 3px 15px;
  }
</style>
