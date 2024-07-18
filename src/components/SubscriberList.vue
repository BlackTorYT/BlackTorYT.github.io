<template>
    <div class="wrapper__subscribers">
      <div class="subscriber__header">
        <h1 class="subscriber__title">Список подписчиков</h1>
        <span>Панель управления / Каналы отправки </span>
      </div>
        <div class="subscriber__buttons">
        <my-delete @click="removeSelectedSubscribers">Удалить</my-delete>
        <!-- <router-link to="/channels/create"> -->
        <my-create @click="$router.push('/subscribers/create')">Создать</my-create>
        <!-- </router-link> -->
      </div>
    <table>
      <thead>
        <tr>
          <th class="subscriber__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="subscriber__id">ID</th>
          <th class="subscriber__name">Имя</th>
          <th class="subscriber__phone">Телефон</th>
          <th class="subscriber__tg">Telegram Chatid</th>
          <th class="subscriber__status">Статус</th>
          <th class="subscriber__action">Действия</th>
        </tr>
      </thead>
      <subscriber-item v-for="subscriber in subscribers" v-bind:subscriber="subscriber" v-bind:key="subscriber.id" 
        @remove="$emit('remove', subscriber)" :selected="selectedSubscribers.includes(subscriber.id)"
        @toggle="toggleSelection">
      </subscriber-item>
    </table>
  </div>
</template>

<script>
// Компонент для списка subscriber
import SubscriberItem from "@/components/SubscriberItem.vue"
export default {
components: {SubscriberItem},
props: {
  subscribers: {
    type: Array,
    required: true
  }
},
data() {
  return {
    selectedSubscribers: []
  };
},
methods: {
  toggleSelection(subscriberId) {
    if (this.selectedSubscribers.includes(subscriberId)) {
      this.selectedSubscribers = this.selectedSubscribers.filter(id => id !== subscriberId);
    } else {
      this.selectedSubscribers.push(subscriberId);
    }
  },
  toggleAll(event) {
    if (event.target.checked) {
      this.selectedSubscribers = this.subscribers.map(subscriber => subscriber.id);
    } else {
      this.selectedSubscribers = [];
    }
  },
  removeSelectedSubscribers() {
    this.$emit('removeSelected', this.selectedSubscribers);
    this.selectedSubscribers = [];
  }
}
};
</script>

<style scoped>
table {
  width: 98%;
  border-top: 7px solid rgb(218, 218, 218);
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  margin: auto;
}

td {
  text-align: left;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
}

th {
  text-align: left;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
  text-transform: uppercase;
}

.wrapper__subscribers {
  background-color: white;
}


.subscriber__checkbox {
  width: 36px;
}

.subscriber__id {
  width: 40px;
}
/* 
.subscriber__name {
  width: 450px;
} */

.subscriber__code {
  width: 200px;
}

.subscriber__mailing {
  width: 200px;
}

.subscriber__status {
  width: 100px;
}

.subscriber__action {
  width: 120px;
}

.subscriber__buttons {
  display: flex;
  margin-left: auto;
  float: right;
  margin-right: 10px;
  gap: 14px;
  background-color: white;
  padding: 12px 0px;
}

.subscriber__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(241, 241, 241);
  padding-left: 16px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}
</style>
