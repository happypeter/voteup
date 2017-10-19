<template>
  <div>
    <h1>{{ option.name }}</h1>
    <h1>{{ percent*100 + '%' }}</h1>
      <svg width="100" height="100" viewBox="0 0 32 32">
      <circle id="background"
        r="16" cx="16" cy="16" fill="#fff" stroke="yellow" stroke-width="12" />
      <circle id="percent"
        r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="deeppink"
        stroke-width="12"
        :stroke-dasharray="percentStr" />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'svg-chart',
    props: ['option'],
    computed: {
      totalVotes: function () {
        return this.$store.state.vote.votes.length
      },
      percent: function () {
        return (this.option.voteCount/this.totalVotes).toFixed(2)
      },
      percentStr: function () {
        return this.percent*100 + ' 100'
      }
    }
  }
</script>

<style>
svg {
  border-radius: 50%;
  transform: rotate(-90deg);
}
</style>
