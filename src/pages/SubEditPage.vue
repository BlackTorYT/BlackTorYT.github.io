<template>
  <div>
    <sub-form :sub="sub" @update="handleUpdateSub" :subs="subs" :isEdit="true" :channels="channels" :subscribers="subscribers"/>
  </div>
</template>

<script>
import SubForm from "@/components/SubForm.vue";

export default {
  components: {
    SubForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
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
  computed: {
    sub() {
      return this.subs.find(sub => sub.id === parseInt(this.id));
    }
  },
  methods: {
    handleUpdateSub(updatedSub) {
      this.$emit('updateSub', updatedSub);
      this.$router.push('/subs');
    }
  }
};
</script>

<style scoped>

</style>
