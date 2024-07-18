<template>
  <div>
    <subscriber-form :subscriber="subscriber" @update="handleUpdateSubscriber" :subscribers="subscribers" :isEdit="true" />
  </div>
</template>

<script>
import SubscriberForm from "@/components/SubscriberForm.vue";

export default {
  components: {
    SubscriberForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    subscribers: {
      type: Array,
      required: true
    }
  },
  computed: {
    subscriber() {
      return this.subscribers.find(subscriber => subscriber.id === parseInt(this.id));
    }
  },
  methods: {
    handleUpdateSubscriber(updatedSubscriber) {
      this.$emit('updateSubscriber', updatedSubscriber);
      this.$router.push('/subscribers');
    }
  }
};
</script>

<style scoped>

</style>
