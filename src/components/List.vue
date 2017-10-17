<template>
  <div class="list">
    <div class="option" v-for="option in options">
      <vote-option
        :option="option"
      ></vote-option>
    </div>
  </div>
</template>

<script>
import VoteOption from './VoteOption'

  export default {
    name: 'list',
    components: { VoteOption },
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
      this.$store.dispatch({
        type: 'loadVotes'
      })
    }
  }
</script>
