<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div class="login__form">
        <input class="login__input" type="text" v-model="username" placeholder="Username">
        <input class="login__input" type="password" v-model="password" placeholder="Password">
        <button class="login__button" type="submit">Login</button>
      </div>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      console.log('Attempting login with username:', this.username);
      const user = {
        username: this.username,
        password: this.password
      };
      try {
        const success = await this.login(user);
        if (!success) {
          this.error = 'Invalid username or password';
          console.log('Login failed: Invalid username or password');
        } else {
          this.$router.push('/');
          console.log('Login successful');
        }
      } catch (error) {
        this.error = 'An error occurred during login';
        console.log('An error occurred during login:', error);
      }
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.login__input {
  height: 30px;
}

.login__form {
  margin: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 320px;
}

.login__button {
  background: rgb(0, 123, 255);
	color: rgb(255, 255, 255);
	border-color: rgb(0, 123, 255);
  border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border-radius: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__button:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

</style>
