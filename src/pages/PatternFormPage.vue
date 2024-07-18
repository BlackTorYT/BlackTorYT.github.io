<template>
  <div>
    <pattern-form :patterns="patterns" @create="handleCreatePattern"/>
  </div>
</template>

<script>
import PatternForm from "@/components/PatternForm.vue";

export default {
  components: {
    PatternForm
  },
  props: {
    patterns: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCreatePattern(newPattern) {
      this.$emit('createPattern', newPattern);
      this.$router.push('/patterns');
    }
  }
};
</script>

<style scoped>

</style>
