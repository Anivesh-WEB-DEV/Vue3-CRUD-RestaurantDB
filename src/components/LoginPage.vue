<template>
  <div>
    <img class="logo" src="../assets/restaurantLogo.jpg" alt="res-logo">
    <h1>Log In</h1>
    <div class="Login">
      <input type="text" placeholder="Enter Email" v-model="email">
      <input type="Password" placeholder="Enter Password" v-model="password">
      <button @click="validateAndLogin">Log In</button>
      <p>
        <router-link to="sign-up">Sign Up</router-link>
      </p>
    </div>
    <div v-if="showAlert" class="alert">
      Please fill in all the login details before logging in.
    </div>
    <div v-if="loginFailed" class="alert">
      Incorrect email or password. Please try again.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      showAlert: false,
      loginFailed: false,
    };
  },
  methods: {
    async validateAndLogin() {
      if (this.email.trim() === '' || this.password.trim() === '') {
        // Show an alert and prevent redirection
        this.showAlert = true;
        return;
      }

      this.showAlert = false; // Hide the alert
     try { const res = await axios.get(`https://api-8u0n.onrender.com/user?email=${this.email}&password=${this.password}`);
      console.log(res.status);
      console.log(res);

      if (res.status == 200 && res.data.length > 0) {
        console.log("login success")
        alert('Login done!');
        localStorage.setItem("user-info", JSON.stringify(res.data[0]));
        this.$router.push({ name: 'HomePage' });
      } else {
        this.loginFailed = true;
      }
    }
    catch (error) {
        // An error occurred, show an alert
        this.loginFailed = true;
  }
}
}}
</script>

<style scoped>
.alert {
  color: red;
}
</style>








