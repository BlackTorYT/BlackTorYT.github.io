<template>
  <div class="mainPage__block">
    <h1>Панель управления</h1>
    <div class="mainPage__content">
      <div >
        <button @click="$router.push('/channels')" class="mainPage__button">
          Каналы отправки сообщений
        </button>
      </div>
      <div >
        <button @click="$router.push('/subscribers')" class="mainPage__button">
          Каналы подписчиков
        </button>
      </div>
      <div >
        <button @click="$router.push('/subs')" class="mainPage__button">
          Управление подписками
        </button>
      </div>
      <div >
        <button @click="$router.push('/patterns')" class="mainPage__button">
          Шаблоны сообщений
        </button>
      </div>
      <div >
        <button @click="$router.push('/logs')" class="mainPage__button">
          Журнал рассылки уведомлений
        </button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'MainPage'
};
</script>

<style scoped>

.mainPage__block h1 {
  width: 414px;
  margin: auto;
  margin-bottom: 40px;
  font-size: 46px;
}

.mainPage__block {
  align-items: center;
  margin-top: 220px;
}

.mainPage__content {
  width: 1000px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

.mainPage__item {
  display: flex;
}

.mainPage__button{
  appearance: none;
  backface-visibility: hidden;
  background-color: #2f80ed;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  /* display: inline-block; */
  display: grid;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
}

.mainPage__button:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.mainPage__button:hover:after {
  opacity: .5;
}

.mainPage__button:active {
  box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
  transform: translateY(2px);
  transition-duration: .35s;
}

.mainPage__button:active:after {
  opacity: 1;
}

@media (min-width: 768px) {
  .mainPage__button {
    padding: 14px 20px;
    width: 260px;
    height: 100px;
  }
}

</style>
