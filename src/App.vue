<template>
  <div id="app">
    <FormDisplayField
      v-bind:label="monthlyCostLabel"
      v-bind:suffix="monthlyCostSuffix"
      v-bind:value="monthlyCost"
    />
    <FormInputField
      v-bind:label="loanAmountLabel"
      v-bind:suffix="loanAmountSuffix"
      v-bind:value="loanAmount"
      step="5000"
      min="5000"
      max="600000"
    />
    <FormInputField
      v-bind:label="repaymentYearsLabel"
      v-bind:suffix="repaymentYearsSuffix"
      v-bind:value="repaymentYears"
      step="1"
      min="1"
      max="15"
    />
  </div>
</template>

<script>
import { calculateMonthlyCost, defaultFormValues } from "./helpers";
import { FormInputField, FormDisplayField } from "./components";

export default {
  name: "App",
  components: {
    FormInputField,
    FormDisplayField
  },
  data() {
    const { loanAmount, repaymentYears, interest } = defaultFormValues;
    return {
      monthlyCost: calculateMonthlyCost(loanAmount, repaymentYears, interest),
      loanAmount,
      repaymentYears,
      monthlyCostLabel: "Månadskostnad",
      monthlyCostSuffix: "kr",
      loanAmountLabel: "Lånebelopp",
      loanAmountSuffix: "kr",
      repaymentYearsLabel: "Återbetalningstid",
      repaymentYearsSuffix: "år",
      ctaLabel: "Ansök nu",
      interest
    };
  },
  methods: {
    updateMonthlyCost() {
      console.log("monthly cost updated!");
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
