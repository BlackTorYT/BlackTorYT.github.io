<template>
  <select v-model="selectedValue" @change="changeOption">
    <option disabled value="">-- Выберите --</option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedValue: this.modelValue
    };
  },
  watch: {
    modelValue(newValue) {
      this.selectedValue = newValue;
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
</style>
