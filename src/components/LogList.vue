<template>
  <div class="wrapper__logs">
    <h1 class="log__title">Журнал рассылки уведомлений</h1>
    <div class="log__filters">
      <h2 class="log__filters__title">Фильтрация по параметрам</h2>
      <div class="log__filters__content">
        <div class="filter__item">
          <div class="filter__item__text">Содержимое сообщения</div>
          <my-input v-model="searchInfoQuery"></my-input>
        </div>
        <div class="filter__item">
          <div class="filter__item__text">Идентификатор получателя</div>
          <my-input v-model="searchIdQuery"></my-input>
        </div>
        <div class="filter__item">
          <div class="filter__item__text">Канал отправки</div>
          <my-select class="input" v-model="selectedChannel" :options="channelOptions"/>
        </div>
        <div class="filter__item">
          <div class="filter__item__text">Статус сообщения</div>
          <my-select class="input" v-model="selectedStatus" :options="statusOptions"/>
        </div>
        <div class="filter__buttons">
          <my-delete class="log__delete__button" @click="removeSelectedLogs">Удалить</my-delete>
          <button class="log__reset__button" @click="resetFilters"><img class="log__reset__img" src="@/assets/trash_white.png" alt="">Сброс</button>
        </div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th class="log__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="log__id">ID</th>
          <th class="log__info">Информация</th>
          <th class="log__message">Сообщение</th>
          <th class="log__status">Статус</th>
          <th class="log__time">Время</th>
          <th class="log__config">Конфиг(JSON)</th>
          <th class="log__action">Действия</th>
        </tr>
      </thead>
      <log-item 
          v-for="log in sortedAndSearchedLogs" 
          :log="log" 
          :key="log.id" 
          @remove="$emit('remove', log)" 
          :selected="selectedLogs.includes(log.id)"
          @toggle="toggleSelection"
        ></log-item>
    </table>
  </div>
</template>

<script>
import LogItem from "@/components/LogItem.vue";

export default {
  components: { LogItem },
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
  data() {
    return {
      selectedLogs: [],
      selectedSort: '',
      selectedChannel: '',
      selectedStatus: '',
      searchInfoQuery: '',
      searchIdQuery: ''
    };
  },
  computed: {
    channelOptions() {
      return this.channels.map(channel => ({
        value: channel.title,
        name: `Канал: ${channel.title}`
      }));
    },
    statusOptions() {
      return [
        { value: '', name: 'Все' },
        { value: 'Отправлено', name: 'Отправлено' },
        { value: 'Ошибка', name: 'Ошибка' }
      ];
    },
    sortOptions() {
      return [
        { value: 'status', name: 'По статусу' },
        { value: 'time', name: 'По времени' }
      ];
    },
    filteredLogs() {
      let filteredLogs = this.logs;

      if (this.selectedChannel) {
        filteredLogs = filteredLogs.filter(log => log.channel === this.selectedChannel);
      }

      if (this.selectedStatus) {
        filteredLogs = filteredLogs.filter(log => log.status === this.selectedStatus);
      }

      return filteredLogs;
    },
    sortedLogs() {
      let logs = this.filteredLogs;
      if (this.selectedSort) {
        logs = logs.sort((log1, log2) =>
          log1[this.selectedSort]?.localeCompare(log2[this.selectedSort])
        );
      }
      return logs;
    },
    sortedAndSearchedLogs() {
      const infoQuery = this.searchInfoQuery.toLowerCase();
      const idQuery = this.searchIdQuery;
      return this.sortedLogs.filter(log => 
        log.info.toLowerCase().includes(infoQuery) && log.id.toString().includes(idQuery)
      );
    }
  },
  methods: {
    toggleSelection(logId) {
      if (this.selectedLogs.includes(logId)) {
        this.selectedLogs = this.selectedLogs.filter(id => id !== logId);
      } else {
        this.selectedLogs.push(logId);
      }
    },
    toggleAll(event) {
      if (event.target.checked) {
        this.selectedLogs = this.logs.map(log => log.id);
      } else {
        this.selectedLogs = [];
      }
    },
    removeSelectedLogs() {
      this.$emit('removeSelected', this.selectedLogs);
      this.selectedLogs = [];
    },
    resetFilters() {
      this.selectedSort = '';
      this.selectedChannel = '';
      this.selectedStatus = '';
      this.searchInfoQuery = '';
      this.searchIdQuery = '';
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

.wrapper__logs {
  background-color: white;
}

.filter__item {
  margin-bottom: 10px;
  width: 420px;
  height: 26px;
}

.filter__item select {
  width: 100%;
  height: 26px;
}

.filter__item input {
  height: 26px;
}


.filter__buttons {
  margin-top: 10px;
  display: flex;
}

.filter__buttons button {
  margin-right: 10px;
}


.log__reset__button {
  background: rgb(212, 32, 32);
	color: rgb(255, 255, 255);
	border-color: rgb(212, 32, 32);
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  width: 50px;
  height: 40px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.log__reset__button:hover {
  background-color: #aa0000;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.log__checkbox {
  width: 36px;
}

.log__message {
  width: 500px;
}

.log__status {
  width: 400px;
}

.log__time {
  width: 300px;
}

.log__config {
  width: 150px;
}

.log__action {
  width: 120px;
}
.log__filters {
  margin-bottom: 30px;
  margin-top: 10px;
}

.log__filters__content {
  display: flex;
  gap: 20px;
  padding-left: 18px;
}

.log__reset__img {
  width: 14px;
  height: 15px;
}

.filter__item__text {
  font-weight: 900;
}

.log__title {
  background-color: rgb(241, 241, 241);
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.log__filters__title {
  font-size: 28px;
  padding-bottom: 4px;
  padding-left: 16px;
}

</style>
