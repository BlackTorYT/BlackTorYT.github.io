<template>
  <form class="wrapper" @submit.prevent="handleSubmit" style="background-color: white;">
    <div class="channelForm__header">
      <h1 class="channelForm__title">{{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки</h1>
      <span>Панель управления / Каналы отправки / {{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки </span>
    </div>
    <div class="channelForm__block">
      <div class="channelForm__line">
        <div class="name">
          <span class="channelForm__item__title">Название</span>
          <my-input type="text" class="input" v-model="localChannel.title" />
          <span v-if="errors.title" class="error">{{ errors.title }}</span>
        </div>
        <div class="uniqueCode">
          <span class="channelForm__item__title">Уникальный код поля</span>
          <my-input type="text" class="input" v-model="localChannel.code" />
          <span v-if="errors.code" class="error">{{ errors.code }}</span>
        </div>
        <div class="mailing">
          <span class="channelForm__item__title">Обработчик</span>
          <select class="mailing__input" v-model="localChannel.mailing">
            <option value="Telegram Bot">Telegram Bot</option>
            <option value="SMS">SMS</option>
          </select>
        </div>
      </div>
      <div class="disc">
        <span class="channelForm__item__title">Описание</span>
        <my-input type="text" class="input" v-model="localChannel.disc" />
      </div>
      <div class="json">
        <span class="channelForm__item__title">Настройки JSON</span>
        <my-input type="text" class="input" v-model="localChannel.json" />
      </div>
      <div class="active">
        <span class="channelForm__item__title">Канал активен?</span>
        <select class="input" v-model="localChannel.status">
          <option :value="true">Да</option>
          <option :value="false">Нет</option>
        </select>
      </div>
      <button class="save__btn">{{ isEdit ? 'Сохранить' : 'Создать' }}</button>
      </div>
  </form>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      default: () => ({
        title: '',
        code: '',
        mailing: 'Telegram Bot',
        disc: '',
        json: '{ "telegram_token":""}',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    channels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localChannel: { ...this.channel },
      errors: {
        title: '',
        code: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.clearErrors();

      if (!this.localChannel.title) {
        this.errors.title = 'Название обязательно для заполнения';
      }

      if (!this.localChannel.code) {
        this.errors.code = 'Уникальный код обязательно для заполнения';
      }

      if (this.errors.title || this.errors.code) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localChannel);
      } else {
        this.$emit('create', { ...this.localChannel, id: this.getNextId() });
      }
      this.$router.push('/channels');
    },
    clearErrors() {
      this.errors = {
        title: '',
        code: ''
      };
    },
    getNextId() {
      if (this.channels.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.channels.map(channel => channel.id));
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

.channelForm__line {
  display: flex;
  width: 98%;
  gap: 20px;
}

.name {
  width: 32%;
}

.uniqueCode {
  width: 32%;
}

.mailing {
  width: 32%;
}

.mailing__input {
  width: 86%;
  height: 33px;
}

.channelForm__block {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 327px;
  padding-top: 20px;
  height: 347px;
}

.channelForm__item__title {
  font-weight: 900;
}

.active {
  display: flex;
  flex-direction: column;
}

.json input {
  height: 50px;
}


.channelForm__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(224, 224, 224);
  padding-left: 10px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.channelForm__title {
  background-color: rgb(224, 224, 224);
  
}
</style>
