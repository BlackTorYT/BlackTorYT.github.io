<template>
  <div>
    <channel-form :channel="channel" @update="handleUpdateChannel" :channels="channels" :isEdit="true" />
  </div>
</template>

<script>
import ChannelForm from "@/components/ChannelForm.vue";

export default {
  components: {
    ChannelForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    channels: {
      type: Array,
      required: true
    }
  },
  computed: {
    channel() {
      return this.channels.find(channel => channel.id === parseInt(this.id));
    }
  },
  methods: {
    handleUpdateChannel(updatedChannel) {
      this.$emit('updateChannel', updatedChannel);
      this.$router.push('/channels');
    }
  }
};
</script>

<style scoped>

</style>
