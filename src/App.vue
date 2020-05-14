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
      v-bind:step="5000"
      v-bind:min="5000"
      v-bind:max="600000"
      v-on:dec-val="decrementFieldValue"
      v-on:inc-val="incrementFieldValue"
    />
    <FormInputField
      v-bind:label="repaymentYearsLabel"
      v-bind:suffix="repaymentYearsSuffix"
      v-bind:value="repaymentYears"
      v-bind:step="1"
      v-bind:min="1"
      v-bind:max="15"
      v-on:dec-val="decrementFieldValue"
      v-on:inc-val="incrementFieldValue"
    />
    <button class="cta">
      <p>{{ctaLabel}}</p>
      <img src="arrow-right.png" alt="right arrow" />
    </button>
  </div>
</template>

<script>
import { calculateMonthlyCost, defaultFormValues } from "./helpers";
//import { FormInputField, FormDisplayField } from "./components";
import FormInputField from "./components/FormInputField.vue";
import FormDisplayField from "./components/FormDisplayField.vue";

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
      this.monthlyCost = calculateMonthlyCost(
        this.loanAmount,
        this.repaymentYears,
        this.interest
      );
    },
    incrementFieldValue(label, step, max) {
      switch (label) {
        case this.loanAmountLabel: {
          const newLoanAmount = this.loanAmount + step;
          if (newLoanAmount <= max) this.loanAmount = newLoanAmount;
          break;
        }
        case this.repaymentYearsLabel: {
          const newRepaymentYears = this.repaymentYears + step;
          if (newRepaymentYears <= max) this.repaymentYears = newRepaymentYears;
          break;
        }
      }

      this.updateMonthlyCost();
    },
    decrementFieldValue(label, step, min) {
      switch (label) {
        case this.loanAmountLabel: {
          const newLoanAmount = this.loanAmount - step;
          if (newLoanAmount >= min) this.loanAmount = newLoanAmount;
          break;
        }
        case this.repaymentYearsLabel: {
          const newRepaymentYears = this.repaymentYears - step;
          if (newRepaymentYears >= min) this.repaymentYears = newRepaymentYears;
          break;
        }
      }

      this.updateMonthlyCost();
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
body,
input,
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #221e48;
}
#app {
  width: 340px;
  margin: 1.5rem 1rem;
}

.cta {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #61d5a7;
  border: none;
  color: white;
  border-radius: 2rem;
  width: 100%;
  padding: 0.7rem 1.5rem;
  font-size: 1.3rem;
  cursor: pointer;
}

.cta img {
  width: 50px;
  height: auto;
}
</style>
