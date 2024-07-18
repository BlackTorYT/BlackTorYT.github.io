<template>
  <div>
    <subscriber-list :subscribers="subscribers" @remove="removeSubscriber" @removeSelected="removeSelectedSubscriber" />
  </div>
</template>

<script>
import SubscriberList from "@/components/SubscriberList.vue";

export default {
  components: {
    SubscriberList
  },
  props: {
    subscribers: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeSubscriber(subscriber) {
      this.$emit('removeSubscriber', subscriber);
    },
    removeSelectedSubscriber(selectedSubscriberIds) {
      this.$emit('removeSelectedSubscriber', selectedSubscriberIds);
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
