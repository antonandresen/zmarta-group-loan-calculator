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
</style>