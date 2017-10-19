<template>
  <div class="result">
    <div v-for="option in sortedOptions">
      <svg-chart :option="option"
      />
    </div>
  </div>
</template>

<script>
  import SvgChart from './SvgChart'
  export default {
    name: 'result',
    components: { SvgChart },
    computed: {
      options: function () {
        return this.$store.state.vote.options
      },
      votes: function () {
        return this.$store.state.vote.votes
      },
      sortedOptions: function () {
        let result =  this.options.map(
           t => {
             const voteCount = this.votes.filter(
               item => item.optionId === t.id
             ).length
             return {
               name: t.text,
               id: t.id,
               voteCount
             }
           }
         )
         return result.sort(function (a, b) {
            return a.voteCount - b.voteCount;
         }).slice().reverse()
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
