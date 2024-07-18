<template>
  <div>
    <pattern-list :patterns="patterns" :subs="subs" :channels="channels" :subscribers="subscribers" @remove="removePattern" @removeSelected="removeSelectedPattern" @testPattern="handleTestPattern" />
  </div>
</template>

<script>
import PatternList from "@/components/PatternList.vue";

export default {
  components: {
    PatternList
  },
  props: {
    patterns: {
      type: Array,
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
  methods: {
    removePattern(pattern) {
      this.$emit('removePattern', pattern);
    },
    removeSelectedPattern(selectedPatternIds) {
      this.$emit('removeSelectedPattern', selectedPatternIds);
    },
    handleTestPattern(log) {
      console.log('PatternPage received testPattern event with log:', log);
      this.$emit('testPattern', log);
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
