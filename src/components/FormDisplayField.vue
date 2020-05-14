<template>
  <section>
    <h3>{{label}}</h3>
    <p>{{spacedValue}} {{suffix}}</p>
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
  padding-bottom: 1rem;
}
h3 {
  padding-bottom: 0.3rem;
}
p {
  font-size: 2rem;
}
</style>