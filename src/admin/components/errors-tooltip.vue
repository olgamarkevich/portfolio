<template lang="pug">
  .inner-tooltip-container
    .tooltip_text tooltip
    button.tooltip_close
</template>

<script>

export default {

};
</script>


<style lang="postcss" scoped>
  .inner-tooltip-container{
    padding: 22px;
    background: #4bb133;
    min-width: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    color:#fff;
    &.warning{
      background: #b18333;
    }
    &.error{
      background: #b13333;
    }
  }
</style>
