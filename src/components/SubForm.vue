<template>
  <form class="wrapper" @submit.prevent="handleSubmitSub" style="background-color: white;">
    <div class="subForm__header">
      <h1 class="subForm__title">{{ isEdit ? 'Редактирование' : 'Создание' }} подписки</h1>
      <span>Панель управления / Подписки / {{ isEdit ? 'Редактирование' : 'Создание' }} подписки </span>
    </div>
    <div class="subForm__block">
    <div class="subForm__line">
      <div class="subscriber">
        Подписчик на рассылку
        <select class="input" v-model="localSub.subscriber">
          <option v-for="subscriber in subscribers" :key="subscriber.id" :value="subscriber.name">
            {{ subscriber.name }} ({{ subscriber.id }})
          </option>
        </select>
        <span v-if="errors.subscriber" class="error">{{ errors.subscriber }}</span>
      </div>
    </div>
    <div class="type">
      Тип события
      <my-input type="text" class="input" v-model="localSub.type" />
    </div>
    <div class="channel">
      Способ уведомления
      <select class="input" v-model="localSub.channel">
        <option v-for="channel in channels" :key="channel.id" :value="channel.title">
          {{ channel.title }}
        </option>
      </select>
      <span v-if="errors.channel" class="error">{{ errors.channel }}</span>
    </div>
    <div class="active">
      Канал активен?
      <select class="input" v-model="localSub.status">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>
    <button class="save__btn">{{ isEdit ? 'Сохранить изменения' : 'Создать' }}</button>
  </div>
  </form>
</template>

<script>
export default {
  props: {
    sub: {
      type: Object,
      default: () => ({
        subscriber: '',
        type: '',
        channel: '',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
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
      localSub: { ...this.sub },
      errors: {
        subscriber: '',
        channel: ''
      }
    };
  },
  methods: {
    handleSubmitSub() {
      this.clearErrors();
      
      if (!this.localSub.subscriber) {
        this.errors.subscriber = 'Имя обязательно для заполнения';
      }

      if (!this.localSub.channel) {
        this.errors.channel = 'Тип обязателен для заполнения';
      }

      if (this.errors.subscriber || this.errors.channel) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localSub);
      } else {
        this.$emit('create', { ...this.localSub, id: this.getNextId() });
      }
      this.$router.push('/subs');
    },
    clearErrors() {
      this.errors = {
        subscriber: '',
        channel: ''
      };
    },
    getNextId() {
      if (this.subs.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.subs.map(sub => sub.id));
      return maxId + 1;
    }
  }
};
</script>

<style scoped>
.save__btn {
  display: block;
  width: 110px;
  background-color: #3386f3;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
}

.save__btn:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.input {
  margin-bottom: 10px;
  padding: 8px;
}

.error {
  color: red;
  font-size: 14px;
}

.subscriberForm__line {
  display: flex;
  width: 100%;
  gap: 20px;
}


.channel {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.subscriber {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.type {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.username__input {
  width: 86%;
  height: 33px;
}

.subForm__block {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 327px;
  padding-top: 20px;
  height: 347px;
}

.subForm__item__title {
  font-weight: 900;
}

.active {
  display: flex;
  flex-direction: column;
}

.subForm__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(224, 224, 224);
  padding-left: 10px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.subForm__title {
  background-color: rgb(224, 224, 224);
  
}
</style>
