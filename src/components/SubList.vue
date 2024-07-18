<template>
  <div class="wrapper__subs">
    <div class="sub__header">
      <h1 class="sub__title">Управление подписками</h1>
      <span>Панель управления / Подписки </span>
    </div>
      <div class="sub__buttons">
      <my-delete @click="removeSelectedSubs">Удалить</my-delete>
      <!-- <router-link to="/channels/create"> -->
      <my-create @click="$router.push('/subs/create')">Создать</my-create>
      <!-- </router-link> -->
    </div>
    <table>
      <thead>
        <tr>
          <th class="sub__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="sub__id">ID</th>
          <th class="sub__channel">Идентификатор канала</th>
          <th class="sub__subscriber">Идентификатор подписчика</th>
          <th class="sub__type">Тип события</th>
          <th class="sub__status">Подписка активна?</th>
          <th class="sub__action">Действия</th>
        </tr>
      </thead>
      <sub-item v-for="sub in subs" v-bind:sub="sub" v-bind:key="sub.id" 
        @remove="$emit('remove', sub)" :selected="selectedSubs.includes(sub.id)"
        @toggle="toggleSelection">
      </sub-item>
    </table>
  </div>
</template>

<script>
// Компонент для списка sub
import SubItem from "@/components/SubItem.vue"
export default {
components: {SubItem},
props: {
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
data() {
  return {
    selectedSubs: []
  };
},
methods: {
  toggleSelection(subId) {
    if (this.selectedSubs.includes(subId)) {
      this.selectedSubs = this.selectedSubs.filter(id => id !== subId);
    } else {
      this.selectedSubs.push(subId);
    }
  },
  toggleAll(event) {
    if (event.target.checked) {
      this.selectedSubs = this.subs.map(sub => sub.id);
    } else {
      this.selectedSubs = [];
    }
  },
  removeSelectedSubs() {
    this.$emit('removeSelected', this.selectedSubs);
    this.selectedSubs = [];
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

.wrapper__subs {
  background-color: white;
}

.sub__id {
  width: 40px;
}

/* .sub__subcriber {
  width: 150px;
} */

.sub__type {
  width: 283px;
}

.sub__channel {
  width: 400px;
}

.sub__status {
  width: 150px;
}

.sub__action {
  width: 101px;
}

.sub__buttons {
  display: flex;
  margin-left: auto;
  float: right;
  margin-right: 10px;
  gap: 14px;
  background-color: white;
  padding: 12px 0px;
}

.sub__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(241, 241, 241);
  padding-left: 16px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.wrapper__subs {
  background-color: white;
}

.sub__checkbox {
  width: 36px;
}
</style>
