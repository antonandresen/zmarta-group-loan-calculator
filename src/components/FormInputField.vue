<template>
  <section>
    <h3>{{label}}</h3>
    <div>
      <MinusButton v-on:dec-val="$emit('dec-val', label, step, min)" />
      <input type="text" :value="spacedValue + ' ' + suffix" readonly />
      <PlusButton v-on:inc-val="$emit('inc-val', label, step, max)" />
    </div>
  </section>
</template>

<script>
import { PlusButton, MinusButton } from ".";
//import PlusButton from "./PlusButton.vue";
//import MinusButton from "./MinusButton.vue;";
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
  computed: {
    spacedValue: function() {
      return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
};
</script>

<style scoped>
section {
  padding-bottom: 2rem;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  padding-bottom: 0.5rem;
}
input {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(211, 211, 211, 0.7);
  font-size: 1.1rem;
}
</style>