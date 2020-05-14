<template>
  <section>
    <h3>{{label}}</h3>
    <MinusButton />
    <input type="text" :value="value" readonly />
    <PlusButton />
  </section>
</template>

<script>
import { PlusButton, MinusButton } from ".";
export default {
  name: "FormInputField",
  components: { PlusButton, MinusButton },
  props: {
    label: {
      type: String
    },
    suffix: {
      type: String
    },
    value: {
      type: Number
    },
    step: {
      type: Number
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  methods: {
    incrementFieldValue() {
      console.log("incrementfieldvalue");
    },
    decrementFieldValue() {
      console.log("decrementfieldvalue");
    }
  }
};
</script>

<style scoped>
</style>