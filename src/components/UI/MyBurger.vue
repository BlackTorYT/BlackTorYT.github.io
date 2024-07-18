<template>
  <div class="menu" v-if="show" @click="hideBurger">
    <div @click.stop class="menu__content">
      <slot @click="hideBurger">
        
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-burger',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideBurger() {
    this.$emit('update:show', false);
  }
  }
};
</script>


<style scoped>
.menu {
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.menu__content {
  width: 300px;
  height: 100%;
  background: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 16px;
  padding-left: 20px;
}

</style>
