<template>
  <div class="result">
    <div v-for="option in sortedOptions">
      <svg-chart :percent="option.percent" />
    </div>
  </div>
</template>

<script>
  import SvgChart from './SvgChart'
  export default {
    name: 'result',
    components: { SvgChart },
    data: function () {
      return {
        sortedOptions: [
          {
            optionId: '3',
            percent: 0.6
          },
          {
            optionId: '5',
            percent: 0.23
          },
          {
            optionId: '4',
            percent: 0.1
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .result {
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    padding: 10px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

</style>
