<template>
  <div>
    <!-- <h3>Список уведомлений</h3> -->
    <notice-item
      v-for="notice in notices"
      :key="notice.id"
      :notice="notice"
    ></notice-item>
  </div>
</template>

<script>
import NoticeItem from "@/components/NoticeItem.vue";

export default {
  name: 'notice-list',
  components: { NoticeItem },
  props: {
    notices: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
