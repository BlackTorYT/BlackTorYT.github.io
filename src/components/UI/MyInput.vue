<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
// Кнопка удалить у списков
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid rgb(218, 218, 218);
}

</style>
