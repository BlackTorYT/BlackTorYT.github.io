<template>
  <div class="notice">
    <div>
      <!-- <div>{{ notice.id }}</div> -->
      <div><strong>Название:</strong> {{ notice.title }}</div>
      <div><strong>Описание:</strong> {{ notice.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notice: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.notice {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
