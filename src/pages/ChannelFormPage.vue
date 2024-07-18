<template>
  <div>
    <channel-form :channels="channels" @create="handleCreateChannel"/>
  </div>
</template>

<script>
import ChannelForm from "@/components/ChannelForm.vue";

export default {
  components: {
    ChannelForm
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCreateChannel(newChannel) {
      this.$emit('createChannel', newChannel);
      this.$router.push('/channels');
    }
  }
};
</script>

<style scoped>

</style>
