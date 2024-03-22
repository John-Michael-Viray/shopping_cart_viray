<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <div class="password-input">
          <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required>
          <i class="eye-icon" :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" @click="togglePasswordVisibility"></i>
        </div>
      </div>
      <button type="submit" class="login-button">Submit</button>
    </form>
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      showPassword: false
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123') {
        this.$emit('authenticated');
        this.$router.push('/');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.login-page {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #ffffff;
  color: #333;
  padding: 40px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  margin-left: -20px;
  margin-bottom: 20px;
}

.login-form {
  margin-bottom: 10px;
  margin-right: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.password-input {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.login-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #dc3545;
}
</style>