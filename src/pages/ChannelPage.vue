<template>
  <div>
    <channel-list :channels="channels" @remove="removeChannel" @removeSelected="removeSelectedChannel" />
  </div>
</template>

<script>
import ChannelList from "@/components/ChannelList.vue";

export default {
  components: {
    ChannelList
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeChannel(channel) {
      this.$emit('removeChannel', channel);
    },
    removeSelectedChannel(selectedChannelIds) {
      this.$emit('removeSelectedChannel', selectedChannelIds);
    }
  }
};
</script>

<style>


.header {
  height: 56px;
  padding: 16px;
  background-color: white;
}

.nav__list {
  display: flex;
  justify-content: space-between;
}

.nav__item__notification {
  display: flex;
  justify-content: space-between;
  width: 230px;
}

#nav__item_left {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.exit__img {
  margin-right: 10px;
}

.nav__item__exit {
  width: 200px;
}




</style>
