<template>
  <div class="list">
    <div class="option" v-for="option in options">
      <vote-option
        :option="option"
        :allVotes="votes"
      ></vote-option>
    </div>
  </div>
</template>


<script>
import VoteOption from './VoteOption'

  export default {
    name: 'list',
    components: { VoteOption },
    data: function () {
      return {
        votes: [
          {
            id: '1',
            voter: 'happypeter',
            optionId: '2'
          },
          {
            id: '2',
            voter: 'billie',
            optionId: '3'
          }
        ]
      }
    },
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
