<template>
  <div class="wrapper__patterns">
    <div class="pattern__header">
      <h1 class="pattern__title">Управление шаплонами</h1>
      <span>Панель управления / Шаблоны </span>
    </div>
      <div class="pattern__buttons">
      <my-delete @click="removeSelectedPatterns">Удалить</my-delete>
      <!-- <router-link to="/channels/create"> -->
      <my-create @click="$router.push('/patterns/create')">Создать</my-create>
      <!-- </router-link> -->
    </div>
    <table>
      <thead>
        <tr>
          <th class="pattern__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="pattern__id">ID</th>
          <th class="pattern__name">Название</th>
          <th class="pattern__code">Код</th>
          <th class="pattern__pattern">Шаблон сообщения</th>
          <th class="pattern__type">Тип события</th>
          <th class="pattern__action">Действия</th>
        </tr>
      </thead>
      <pattern-item 
        v-for="pattern in patterns" 
        :key="pattern.id" 
        :pattern="pattern" 
        :selected="selectedPatterns.includes(pattern.id)"
        :subs="subs"
        :subscribers="subscribers"
        :channels="channels"
        @remove="$emit('remove', pattern)" 
        @toggle="toggleSelection" 
        @testPattern="handleTestPattern"
      />
    </table>
  </div>
</template>

<script>
import PatternItem from "@/components/PatternItem.vue";

export default {
  components: { PatternItem },
  props: {
    patterns: {
      type: Array,
      required: true
    },
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
      selectedPatterns: []
    };
  },
  methods: {
    toggleSelection(patternId) {
      if (this.selectedPatterns.includes(patternId)) {
        this.selectedPatterns = this.selectedPatterns.filter(id => id !== patternId);
      } else {
        this.selectedPatterns.push(patternId);
      }
    },
    toggleAll(event) {
      if (event.target.checked) {
        this.selectedPatterns = this.patterns.map(pattern => pattern.id);
      } else {
        this.selectedPatterns = [];
      }
    },
    removeSelectedPatterns() {
      this.$emit('removeSelected', this.selectedPatterns);
      this.selectedPatterns = [];
    },
    handleTestPattern(log) {
      console.log('PatternList received testPattern event with log:', log);
      this.$emit('testPattern', log);
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


.pattern__name {
  width: 150px;
  background-color: white
}

.pattern__code {
  width: 283px;
}

.pattern__type {
  width: 250px;
}

.pattern__action {
  width: 101px;
}

.pattern__buttons {
  display: flex;
  margin-left: auto;
  float: right;
  margin-right: 10px;
  gap: 14px;
  background-color: white;
  padding: 12px 0px;
}

.pattern__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(241, 241, 241);
  padding-left: 16px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.wrapper__patterns {
  background-color: white;
}

.pattern__checkbox {
  width: 36px;
}

.pattern__pattern {
  width: 940px;
}

</style>
