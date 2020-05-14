<template>
  <div id="app">
    <FormField />
  </div>
</template>

<script>
import { calculateMonthlyCost, defaultFormValues } from "./helpers";
import { FormField } from "./components";

export default {
  name: "App",
  components: {
    FormField
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
