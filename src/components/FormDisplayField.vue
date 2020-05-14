<template>
  <section>
    <h3>{{label}}</h3>
    <p>{{value}} {{suffix}}</p>
  </section>
</template>

<script>
export default {
  name: "FormDisplayField",
  props: {
    label: {
      type: String
    },
    suffix: {
      type: String
    },
    value: {
      type: Number
    }
  }
};
</script>

<style scoped>
section {
  padding-bottom: 1rem;
}
h3 {
  padding-bottom: 0.3rem;
}
p {
  font-size: 2rem;
}
</style>