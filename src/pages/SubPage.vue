<template>
  <div>
    <sub-list :subs="subs" :channels="channels" :subscribers="subscribers" @remove="removeSub" @removeSelected="removeSelectedSub" />
  </div>
</template>

<script>
import SubList from "@/components/SubList.vue";

export default {
  components: {
    SubList
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
  created() {
    console.log('Subs in SubPage:', this.subs);
  },
  methods: {
    removeSub(sub) {
      this.$emit('removeSub', sub);
    },
    removeSelectedSub(selectedSubIds) {
      this.$emit('removeSelectedSub', selectedSubIds);
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
