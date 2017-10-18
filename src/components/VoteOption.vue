<template>
  <div class="option">
    <div class="title">
      <div class="text">
        {{ option.text }}
      </div>
    </div>
    <div class="votes">
      <div class="vote" v-for="vote in votes">
        {{ vote.voter }}
      </div>
    </div>
    <div class="action">
      <div v-if="voted">
        <button @click="undo"
        class="vote-btn voted">已投</button>
      </div>
      <div v-else>
        <button @click="voteup"
        class="vote-btn">投票</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vote-option',
    props: ['option', 'allVotes'],
    computed: {
      votes: function () {
        const allVotes = this.$store.state.vote.votes
        return allVotes.filter(t => t.optionId == this.option.id)
      },
      voted: function () {
        return this.votes.filter(t => t.voter === this.currentUser).length
      },
      currentUser: function () {
        return this.$store.state.auth.currentUser
      }
    },
    methods: {
      undo: function () {
        const vote = this.votes.find(t => t.voter === this.currentUser )
        console.log('undo', vote.id)
        this.$store.dispatch({
          type: 'undo',
          voteId: vote.id
        })
      },
      voteup: function () {
        if (this.voted || !this.currentUser) return
        let vote = {
          voter: this.currentUser,
          optionId: this.option.id
        }
        this.$store.dispatch({
          type: 'voteup',
          vote
        })
      }
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
    display: flex;
    flex-direction: column;
  }

  .option .title {
    display: flex;
    justify-content: space-around;
  }
  .option .title .text {
    flex-shrink: 1;
    margin: 0;
    font-size: 18px ;
    border: 2px solid #00bcd4;
    color: #00bcd4;
    display: inline-block;
    padding: 3px 15px;
  }

  .action {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .votes {
    margin-top: 10px;
    text-align: left;
  }
  .vote {
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 2px;
    margin-right: 5px;
    font-size: 14px;
  }
  button.vote-btn {
    font-size: 20px;
    padding: 6px 12px;
  }
  button.vote-btn.voted {
    background-color: #7dd222;
  }
</style>
