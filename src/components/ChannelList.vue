<template>
    <div class="wrapper__channels">
      <div class="channel__header">
        <h1 class="channel__title">Каналы отправки уведомлений</h1>
        <span>Панель управления / Каналы отправки </span>
      </div>
        <div class="channel__buttons">
        <my-delete @click="removeSelectedChannels">Удалить</my-delete>
        <!-- <router-link to="/channels/create"> -->
        <my-create @click="$router.push('/channels/create')">Создать</my-create>
        <!-- </router-link> -->
      </div>
      <table>
        <thead>
          <tr>
            <th class="channel__checkbox"><input type="checkbox" @change="toggleAll"></th>
            <th class="channel__id">ID</th>
            <th class="channel__name">Название</th>
            <th class="channel__code">Код</th>
            <th class="channel__mailing">Шлюз рассылки</th>
            <th class="channel__disc">Описание</th>
            <th class="channel__status">Статус</th>
            <th class="channel__action">Действия</th>
          </tr>
        </thead>
        <channel-item v-for="channel in channels" v-bind:channel="channel" v-bind:key="channel.id" 
          @remove="$emit('remove', channel)" :selected="selectedChannels.includes(channel.id)"
          @toggle="toggleSelection">
        </channel-item>
      </table>
    </div>
</template>

<script>
// Компонент для списка каналов
import ChannelItem from "@/components/ChannelItem.vue"
export default {
  components: {ChannelItem},
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedChannels: []
    };
  },
  methods: {
    toggleSelection(channelId) {
      if (this.selectedChannels.includes(channelId)) {
        this.selectedChannels = this.selectedChannels.filter(id => id !== channelId);
      } else {
        this.selectedChannels.push(channelId);
      }
    },
    toggleAll(event) {
      if (event.target.checked) {
        this.selectedChannels = this.channels.map(channel => channel.id);
      } else {
        this.selectedChannels = [];
      }
    },
    removeSelectedChannels() {
      this.$emit('removeSelected', this.selectedChannels);
      this.selectedChannels = [];
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

.wrapper__channels {
  background-color: white;
}

.channel__checkbox {
  width: 36px;
}

.channel__id {
  width: 40px;
}

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

.channel__buttons {
  display: flex;
  margin-left: auto;
  float: right;
  margin-right: 10px;
  gap: 14px;
  background-color: white;
  padding: 12px 0px;
}

.channel__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(241, 241, 241);
  padding-left: 16px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}
</style>
