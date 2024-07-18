<template>
  <div>
    <log-list :logs="logs" @remove="removeLog" @removeSelected="removeSelectedLog" :channels="channels"/>
  </div>
</template>

<script>
import LogList from "@/components/LogList.vue";

export default {
  components: {
    LogList
  },
  props: {
    logs: {
      type: Array,
      required: true
    },
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeLog(log) {
      this.$emit('removeLog', log);
    },
    removeSelectedLog(selectedLogIds) {
      this.$emit('removeSelectedLog', selectedLogIds);
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
