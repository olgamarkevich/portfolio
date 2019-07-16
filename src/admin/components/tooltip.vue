<template lang="pug">
  .inner-tooltip-container(:class="type")
    .tooltip_text {{text}}
    button.tooltip_close(@click="closeTooltip")
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed:{
    ...mapState("tooltips", {
    text: state => state.text,
    type: state => state.type
    })
  },
  methods:{
    ...mapActions('tooltips', ['closeTooltip'])
  }
};
</script>


<style lang="postcss" scoped>
  .inner-tooltip-container{
    padding: 22px;
    background: #4bb133;
    min-width: 280px;
    margin: 0 auto;
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

.tooltip_close{
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 20px;
  background: svg-load('close.svg', fill=#fff) center no-repeat;
  position: relative;
  top:3px;
}

</style>
