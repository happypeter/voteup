<template>
  <div class="result">
    <h1>68%</h1>
    <svg width="100" height="100" viewBox="0 0 32 32">
    <circle id="background"
      r="16" cx="16" cy="16" fill="#fff" stroke="yellow" stroke-width="12" />
    <circle id="percent"
      r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="deeppink" stroke-width="12" stroke-dasharray="68 100" />
  </svg>
  <h1>32%</h1>
  <svg width="100" height="100" viewBox="0 0 32 32">
  <circle id="background"
    r="16" cx="16" cy="16" fill="#fff" stroke="yellow" stroke-width="12" />
  <circle id="percent"
    r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="deeppink" stroke-width="12" stroke-dasharray="32 100" />
</svg>
  </div>
</template>

<script>
  export default {
    name: 'result'
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
  svg {
    border-radius: 50%;
    transform: rotate(-90deg);
  }
</style>
