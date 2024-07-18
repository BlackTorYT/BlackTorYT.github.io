<template>
  <form class="wrapper" @submit.prevent="handleSubmitPattern" style="background-color: white;">
    <div class="patternForm__header">
      <h1 class="patternForm__title">{{ isEdit ? 'Редактирование' : 'Создание' }} шаблона</h1>
      <span>Панель управления / Подписки / {{ isEdit ? 'Редактирование' : 'Создание' }} шаблона </span>
    </div>
    <div class="patternForm__block">
    <div class="patternForm__line">
    <div class="name">
      Название
      <my-input type="text" class="input" v-model="localPattern.title" />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
    </div>
    </div>
    <div class="phone">
      Код
      <my-input type="text" class="input" v-model="localPattern.code" />
      <span v-if="errors.code" class="error">{{ errors.code }}</span>
    </div>
    <div class="username">
      Шаблон сообщения
      <my-input type="text" class="input" v-model="localPattern.pattern" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <div class="tg">
      Тип события
      <my-input type="text" class="input" v-model="localPattern.type" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <button class="save__btn">{{ isEdit ? 'Сохранить' : 'Создать' }}</button>
  </div>
  </form>
</template>

<script>
export default {
  props: {
    pattern: {
      type: Object,
      default: () => ({
        title: '',
        code: '',
        pattern: '',
        type: ''
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    patterns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localPattern: { ...this.pattern },
      errors: {
        title: '',
        code: ''
      }
    };
  },
  methods: {
    handleSubmitPattern() {
      this.clearErrors();

      if (!this.localPattern.title) {
        this.errors.title = 'Название обязательно для заполнения';
      }

      if (!this.localPattern.code) {
        this.errors.code = 'Код обязателен для заполнения';
      }

      if (this.errors.title || this.errors.code) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localPattern);
      } else {
        this.$emit('create', { ...this.localPattern, id: this.getNextId() });
      }
      this.$router.push('/patterns');
    },
    clearErrors() {
      this.errors = {
        title: '',
        code: ''
      };
    },
    getNextId() {
      if (this.patterns.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.patterns.map(pattern => pattern.id));
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

.patternForm__line {
  display: flex;
  width: 100%;
  gap: 20px;
}


.name{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.code {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.type {
  width: 100%;
  display: flex;
  flex-direction: column;
}


.patternForm__block {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 327px;
  padding-top: 20px;
  height: 347px;
}

.patternForm__item__title {
  font-weight: 900;
}

.active {
  display: flex;
  flex-direction: column;
}

.patternForm__header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(224, 224, 224);
  padding-left: 10px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.patternForm__title {
  background-color: rgb(224, 224, 224);
  
}
</style>
