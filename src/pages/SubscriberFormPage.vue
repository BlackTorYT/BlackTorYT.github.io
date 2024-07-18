<template>
  <div>
    <subscriber-form :subscribers="subscribers" @create="handleCreateSubscriber"/>
  </div>
</template>

<script>
import SubscriberForm from "@/components/SubscriberForm.vue";

export default {
  components: {
    SubscriberForm
  },
  props: {
    subscribers: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCreateSubscriber(newSubscriber) {
      this.$emit('createSubscriber', newSubscriber);
      this.$router.push('/subscribers');
    }
  }
};
</script>

<style scoped>

</style>
