<template>
  <button class="create__button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <slot></slot>
  </button>
</template>

<script>
// Кнопка удалить
export default {
  name: 'my-create'
}
</script>

<style scoped>

.delete__button img {
  padding-right: 3px;
}

.create__button {
  background: rgb(0, 123, 255);
	color: rgb(255, 255, 255);
	border-color: rgb(0, 123, 255);
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create__button:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

</style>
