﻿<template>
        <tbody>
          <tr class="channel">
            <td><input type="checkbox" :checked="selected" @change="toggle"></td>
            <td class="channel__id">{{ channel.id }}</td>
            <td class="channel__name">{{ channel.title }}</td>
            <td class="channel__code">{{ channel.code }}</td>
            <td class="channel__mailing">{{ channel.mailing }}</td>
            <td class="channel__disc">{{ channel.disc }}</td>
            <td class="channel__status">{{ statusText }}</td>
            <td class="channel__action">
              <!-- <router-link  :to="'/channels/edit/' + channel.id"> -->
                <button class="item__edit__button" @click="$router.push('/channels/edit/' + channel.id)">
                  <svg class="item__edit__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#3f3f3f" fill="none">
                  <path d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>  
                  Изменить
                </button>
              <!-- </router-link> -->
              <div class="channel__delete" @click="$emit('remove', channel)"><my-button class="item__delete__button">
                <svg class="item__delete__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#3f3f3f" fill="none">
                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                Удалить</my-button></div>
            </td>
          </tr>
        </tbody>
</template>

<script>
// Компонент для отдельного канала
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
  props: {
    channel: {
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
      return this.channel.status ? 'Включен' : 'Отключен';
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.channel.id);
    }
  }
};

</script>

<style scoped>
.channel__name {
  width: 150px;
}

.channel__code {
  width: 200px;
}

.channel__mailing {
  width: 200px;
}

.channel__status {
  width: 100px;
}

.channel__action {
  width: 120px;
}

.item__edit__button {
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item__edit__svg {
  width: 18px;
  margin-right: 6px;
}

.item__delete__button {
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item__delete__svg {
  width: 18px;
  margin-right: 6px;
}

.item__delete__button:hover {
  background-color: rgba(121, 48, 48, 0.2);
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.item__edit__button:hover {
  background-color: rgba(54, 79, 126, 0.2);
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}
</style>
