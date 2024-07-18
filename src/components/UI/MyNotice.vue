<template>
  <div class="notice" v-if="show" @click="hideDialog">
    <div @click.stop class="notice__content">
      <notice-list :notices="notices"/> 
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NoticeList from "@/components/NoticeList.vue";

export default {
  components: {
    NoticeList
  },
  name: 'my-notice',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  notices: {
      type: Array,
      required: true
    },
  methods: {
    hideDialog(){
      this.$emit('update:show', false)
    }
  }
};

</script>

<style scoped>
.notice {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background: rgba(0,0,0,0.5); */
  position: fixed;
  display: flex;
}

.notice__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  height: 300px;
  width: 300px;
  padding: 10px;
  margin-right: 90px;
  margin-top: 60px;
  height: 80vh;
  overflow-y: auto;
}
</style>
