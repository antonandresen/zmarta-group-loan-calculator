<template>
  <button class="calculator-button" v-on:click="$emit('inc-val')">
    <span>+</span>
  </button>
</template>

<script>
export default {
  name: "PlusButton"
};
</script>

<style scoped>
.calculator-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  line-height: 1;
  overflow: hidden;
  width: 44px;
  height: 44px;
  content: "";
  font-size: 30px;
  color: white;
  background: #61d5a7;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: lighter;
}
</style>