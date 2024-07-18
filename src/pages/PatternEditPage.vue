<template>
  <div>
    <pattern-form :pattern="pattern" @update="handleUpdatePattern" :patterns="patterns" :isEdit="true" />
  </div>
</template>

<script>
import PatternForm from "@/components/PatternForm.vue";

export default {
  components: {
    PatternForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    patterns: {
      type: Array,
      required: true
    }
  },
  computed: {
    pattern() {
      return this.patterns.find(pattern => pattern.id === parseInt(this.id));
    }
  },
  methods: {
    handleUpdatePattern(updatedPattern) {
      this.$emit('updatePattern', updatedPattern);
      this.$router.push('/patterns');
    }
  }
};
</script>

<style scoped>

</style>
