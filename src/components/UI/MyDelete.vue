<template>
  <button class="delete__button">
    <img src="@/assets/trash_red.png" alt="">
    <slot></slot>
  </button>
</template>

<script>
// Кнопка удалить
export default {
  name: 'my-delete'
}
</script>

<style scoped>

.delete__button img {
  padding-right: 3px;
}

.delete__button {
  background: none;
	color: rgb(253, 56, 56);
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  border: 2px solid rgb(253, 56, 56, 0.6);
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete__button:hover {
  background-color: rgb(253, 56, 56, 0.1);
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}
</style>
