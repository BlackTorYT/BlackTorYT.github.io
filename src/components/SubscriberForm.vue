<template>
  <form class="wrapper" @submit.prevent="handleSubmitSubcsriber" style="background-color: white;">
    <div class="subscriberForm__header">
      <h1 class="subscriberForm__title">{{ isEdit ? 'Редактирование' : 'Создание' }} подписчика</h1>
      <span>Панель управления / Подписчики / {{ isEdit ? 'Редактирование' : 'Создание' }} подписчика </span>
    </div>
    <div class="subscriberForm__block">
    <div class="subscriberForm__line">
      <div class="name">
        Имя пользователя
        <my-input type="text" class="input" v-model="localSubscriber.name" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <div class="phone">
        Телефон
        <my-input type="text" class="input" v-model="localSubscriber.phone" />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div class="username">
        Никнейм(username)
        <my-input type="text" class="input" v-model="localSubscriber.username" />
        <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
      </div>
      <div class="tg">
        Telegram Chatid
        <my-input type="text" class="input" v-model="localSubscriber.tg" />
        <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
      </div>
    </div>
    <div class="note">
      Примечание администратора
      <my-input type="text" class="input" placeholder="Произвольное примечение для администратора" 
      v-model="localSubscriber.note" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <div class="phoneConfirmed">
      Телефон подтвержден?
      <select class="input" v-model="localSubscriber.phoneConfirmed">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>
    <div class="active">
      Статус подписчика
      <select class="input" v-model="localSubscriber.status">
        <option :value="true">Включен</option>
        <option :value="false">Отключен</option>
      </select>
    </div>
    <button class="save__btn">{{ isEdit ? 'Сохранить' : 'Создать' }}</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    subscriber: {
      type: Object,
      default: () => ({
        name: '',
        phone: '',
        username: '',
        tg: '',
        note: '',
        phoneConfirmed: 'Да',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    subscribers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localSubscriber: { ...this.subscriber },
      errors: {
        name: '',
        phone: ''
      }
    };
  },
  methods: {
    handleSubmitSubcsriber() {
      this.clearErrors();

      if (!this.localSubscriber.name) {
        this.errors.name = 'Имя обязательно для заполнения';
      }

      if (!this.localSubscriber.phone) {
        this.errors.phone = 'Телефон обязателен для заполнения';
      }

      if (this.errors.name || this.errors.phone) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localSubscriber);
      } else {
        this.$emit('create', { ...this.localSubscriber, id: this.getNextId() });
      }
      this.$router.push('/subscribers');
    },
    clearErrors() {
      this.errors = {
        name: '',
        phone: ''
      };
    },
    getNextId() {
      if (this.subscribers.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.subscribers.map(subscriber => subscriber.id));
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

.name {
  width: 25%;
}

.phone {
  width: 25%;
}

.username {
  width: 25%;
}

.tg {
  width: 25%;
}

.username__input {
  width: 86%;
  height: 33px;
}

.subscriberForm__block {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 327px;
  padding-top: 20px;
  height: 347px;
}

.subscriberForm__item__title {
  font-weight: 900;
}

.active {
  display: flex;
  flex-direction: column;
}

.subscriberForm__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(224, 224, 224);
  padding-left: 10px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.subscriberForm__title {
  background-color: rgb(224, 224, 224);
  
}
</style>
