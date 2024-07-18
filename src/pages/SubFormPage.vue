<template>
  <div>
    <sub-form :subs="subs" @create="handleCreateSub" :channels="channels" :subscribers="subscribers"/>
  </div>
</template>

<script>
import SubForm from "@/components/SubForm.vue";

export default {
  components: {
    SubForm
  },
  props: {
    subs: {
      type: Array,
      required: true
    },
    channels: {
      type: Array,
      required: true
    },
    subscribers: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCreateSub(newSub) {
      this.$emit('createSub', newSub);
      this.$router.push('/subs');
    }
  }
};
</script>

<style scoped>

</style>
