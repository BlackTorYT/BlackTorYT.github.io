<template>
  <tbody>
    <tr class="log">
      <td><input type="checkbox" :checked="selected" @change="toggle"></td>
      <td class="log__id">{{ log.id }}</td>
      <td class="log__info">{{ log.info }}</td>
      <td class="log__message">{{ log.message }}</td>
      <td class="log__status">{{ log.status }}</td>
      <td class="log__time">{{ log.time }}</td>
      <td class="log__config">{{ log.config }}</td>
      <td class="log__action">
          <button class="log__button">
            <svg class="log__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#74d771" fill="none">
              <path d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Повторить отправку
          </button>
      </td>
    </tr>
  </tbody>
</template>

<script>

export default {
  props: {
    log: {
      type: Object,
      required: true
     },
  selected: {
    type: Boolean,
    required: true
    } 
  },
  computed: {
    statusText() {
    return this.log.status ? 'Включен' : 'Отключен';
    }
  },
  methods: {
    toggle() {
    this.$emit('toggle', this.log.id);
    }
  }
};

</script>

<style scoped>
.log__info {

}

.log__message {

}

.log__status {

}

.log__time {

}

.log__config {

}

.log__action {
  width: 101px;
}

.log__button {
  background: none;
	color: rgb(116, 215, 113);
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border: 2px solid rgb(116, 215, 113);
  width: 100px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.log__button:hover {
  background-color: rgb(116, 215, 113, 0.1);
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.log__svg {
  width: 19px;  
  height: 19px;
}


</style>
