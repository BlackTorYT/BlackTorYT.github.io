<template>
  <my-burger v-model:show="burgerVisible">
    <!-- <router-link to="/" @click="noShowBurger">Панель управления</router-link> -->
    <button  @click="$router.push('/')" class="main__title" >
        <div @click="noShowBurger">
        Панель управления
        </div>
      </button>
    <div class="main__content">
      <!-- <router-link to="/channels" class="main__item" @click="noShowBurger">Каналы отправки сообщений</router-link> -->
      <button  @click="$router.push('/channels')" class="main__item" >
        <div @click="noShowBurger">
        Каналы отправки сообщений
        </div>
      </button>
      <!-- <router-link to="/subscribers" class="main__item" @click="noShowBurger">Каналы подписчиков</router-link> -->
      <button  @click="$router.push('/subscribers')" class="main__item" >
        <div @click="noShowBurger">
        Каналы подписчиков
        </div>
      </button>
      <!-- <router-link to="/subs" class="main__item" @click="noShowBurger">Управление подписками</router-link> -->
      <button  @click="$router.push('/subs')" class="main__item" >
        <div @click="noShowBurger">
          Управление подписками
        </div>
      </button>
      <!-- <router-link to="/patterns" class="main__item" @click="noShowBurger">Шаблоны сообщений</router-link> -->
      <button  @click="$router.push('/patterns')" class="main__item" >
        <div @click="noShowBurger">
          Шаблоны сообщений
        </div>
      </button>
      <!-- <router-link to="/logs" class="main__item" @click="noShowBurger">Журнал рассылки уведомлений</router-link> -->
      <button  @click="$router.push('/logs')" class="main__item" >
        <div @click="noShowBurger">
          Журнал рассылки уведомлений
        </div>
      </button>
    </div>
  </my-burger>
  <div class="app">
    <header class="header">
      <div class="header__nav">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item" id="nav__item_left">
              <button @click="showBurger" class="burger__menu__button">
                <img class="burger" src="./assets/burger.png" alt="menu">
              </button>
              <button @click="$router.push('/')" class="nav__panel">
                Панель управления
              </button>
            </li>
            <div class="nav__item__notification">
              <li class="nav__item">
                <button @click="showNotice" class="notification__button"><img class="notification__img" src="./assets/notification.png" alt="notification"></button>
              </li>
              <li class="nav__item" id="nav__item__exit" @click="handleLogout">
                <button class="logout__button"><img class="exit__img" src="./assets/exit.png" alt="exit"><span class="exit__text">Выйти из аккаунта</span></button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    <my-notice v-model:show="noticeVisible" :notices="notices" :notice="notice">
      <notice-list :notices="notices"/> 
    </my-notice>
    <router-view 
      :channels="channels" 
      @updateChannel="updateChannel" 
      @createChannel="createChannel"
      @removeChannel="removeChannel" 
      @removeSelectedChannel="removeSelectedChannel" 
      :subscribers="subscribers" 
      @createSubscriber="createSubscriber"
      @removeSubscriber="removeSubscriber" 
      @removeSelectedSubscriber="removeSelectedSubscriber" 
      @updateSubscriber="updateSubscriber"
      :subs="subs" 
      @createSub="createSub"
      @removeSub="removeSub" 
      @removeSelectedSub="removeSelectedSub" 
      @updateSub="updateSub"
      :patterns="patterns" 
      @createPattern="createPattern"
      @removePattern="removePattern" 
      @removeSelectedPattern="removeSelectedPattern" 
      @updatePattern="updatePattern"
      :logs="logs" 
      @removeSelectedLog="removeSelectedLog"
      @testPattern="createLog"
    ></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import NoticeList from "@/components/NoticeList.vue";
export default {
  components: {NoticeList},
  name: 'App',
  data() {
    return {
      channels: [
        { id: 1, title: "Telegram Bot", code: "TELEGRAM_BOT", mailing: "TELEGRAM_BOT", disc: "Тг бот", status: true },
        { id: 2, title: "MTS", code: "MTS_GW", mailing: "SMS", disc: "", status: true }
      ],
      subscribers: [
        { id: 1, name: "Кирилл", phone: "+79422313123", username: "apapa", tg: "13123", note: "", phoneConfirmed: true, status: true },
        { id: 2, name: "Иван", phone: "+79116241196", username: "marara", tg: "13111", note: "", phoneConfirmed: true, status: true }
      ],
      subs: [
        { id: 1, subscriber: "Кирилл", type: "Завершение обслуживания", channel: "Telegram Bot", status: true },
        { id: 2, subscriber: "Иван", type: "Начало обслуживания объекта очереди", channel: "Telegram Bot", status: true }
      ],
      patterns: [
        { id: 1, title: "Вызов объекта очереди для обслуживания", code: "call_for_processing", pattern: "test", type: "Вызван следующий объект очереди"},
        { id: 2, title: "Завершения обслуживания", code: "end_processing", pattern: "test", type: "Вызван следующий объект очереди"}
      ],
      logs: [
        { id: 1, info: "INFO INFO INFO INFO INFO INFO INFO INFO", message: "call_for_processing", status: "test", time: "Вызван следующий объект очереди", config: ""},
        { id: 2, info: "A AAINFO INFO INFO INFO INFO INFO INFO INFO", message: "call_for_processing", status: "Ошибка", time: "Вызван следующий объект очереди", config: ""},
        { id: 3, info: "CCCCCC AAINFO INFO INFO INFO INFO INFO INFO INFO", message: "call_for_processing", status: "test", time: "Вызван следующий объект очереди", config: ""},
        { id: 4, info: "BBBB AAINFO INFO INFO INFO INFO INFO INFO INFO", message: "call_for_processing", status: "Отправлено", time: "Вызван следующий объект очереди", config: ""}
      ],
      notices: [
        {id: 1, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 2, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 3, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 4, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 5, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 6, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 7, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 8, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
        {id: 9, title: "Тест", body: "Это тестовое уведомлениеЭто тестовое уведомлениеЭто тестовое уведомление"},
      ],
      burgerVisible: false,
      noticeVisible: false
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    showNotice() {
        this.noticeVisible = true;
      },
    createLog(log) {
      console.log('App received testPattern event with log:', log);
      this.logs.push(log);
    },
    ...mapActions(['login', 'logout']),
    createChannel(channel) {
      this.channels.push(channel);
    },
    removeChannel(channel) {
      this.channels = this.channels.filter(c => c.id !== channel.id);
    },
    removeSelectedChannel(selectedChannelIds) {
      this.channels = this.channels.filter(channel => !selectedChannelIds.includes(channel.id));
    },
    updateChannel(updatedChannel) {
      const index = this.channels.findIndex(channel => channel.id === updatedChannel.id);
      if (index !== -1) {
        this.channels.splice(index, 1, updatedChannel);
      }
    },
    createSubscriber(subscriber) {
      this.subscribers.push(subscriber);
    },
    removeSubscriber(subscriber) {
      this.subscribers = this.subscribers.filter(s => s.id !== subscriber.id);
    },
    removeSelectedSubscriber(selectedSubscriberIds) {
      this.subscribers = this.subscribers.filter(subscriber => !selectedSubscriberIds.includes(subscriber.id));
    },
    updateSubscriber(updatedSubscriber) {
      const index = this.subscribers.findIndex(subscriber => subscriber.id === updatedSubscriber.id);
      if (index !== -1) {
        this.subscribers.splice(index, 1, updatedSubscriber);
      }
    },
    createSub(sub) {
      this.subs.push(sub);
    },
    removeSub(sub) {
      this.subs = this.subs.filter(s => s.id !== sub.id);
    },
    removeSelectedSub(selectedSubIds) {
      this.subs = this.subs.filter(sub => !selectedSubIds.includes(sub.id));
    },
    updateSub(updatedSub) {
      const index = this.subs.findIndex(sub => sub.id === updatedSub.id);
      if (index !== -1) {
        this.subs.splice(index, 1, updatedSub);
      }
    },
    createPattern(pattern) {
      this.patterns.push(pattern);
    },
    removePattern(pattern) {
      this.patterns = this.patterns.filter(p => p.id !== pattern.id);
    },
    removeSelectedPattern(selectedPatternIds) {
      this.patterns = this.patterns.filter(pattern => !selectedPatternIds.includes(pattern.id));
    },
    updatePattern(updatedPattern) {
      const index = this.patterns.findIndex(pattern => pattern.id === updatedPattern.id);
      if (index !== -1) {
        this.patterns.splice(index, 1, updatedPattern);
      }
    },
    removeSelectedLog(selectedLogIds) {
      this.logs = this.logs.filter(log => !selectedLogIds.includes(log.id));
    },
    showBurger() {
      this.burgerVisible = true;
    },
    noShowBurger() {
      this.burgerVisible = false;
    },
    handleLogout() {
      this.logout().then(() => {
        this.$router.push('/login');
      });
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, ul li {
  list-style: none;
}

img {
  height: 17px;
  width: 16px;
}

body {
  background-color: rgb(241, 241, 241);
}

table {
  width: 100%;
  border-top: 7px solid rgb(218, 218, 218);
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
}

td {
  text-align: left;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
}
th {
  text-align: center;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
}

.header {
  height: 56px;
  padding: 16px;
  background-color: white;
}

.nav__list {
  display: flex;
  justify-content: space-between;
}

.nav__item__notification {
  display: flex;
  justify-content: space-between;
  width: 230px;
}

#nav__item_left {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.exit__img {
  margin-right: 10px;
}

.nav__item__exit {
  width: 200px;
}

.main__content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.burger__menu__button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit
  
}

.logout__button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.notification__button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  margin-top: 1px;
}

.exit__img {
  margin-top: 1px;
}

.exit__text {
  margin-bottom: 1px;
}

.nav__panel{
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.main__item {
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  background: none;
  background: rgb(6, 98, 197);
	color: rgb(255, 255, 255);
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  width: 260px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main__item:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.main__title {
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  display: flex;
  background: none;
  margin-bottom: 20px;
}

.menu__content a {
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  display: flex;
  
}
</style>