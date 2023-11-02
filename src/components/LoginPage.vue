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











<!-- <template>
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
      const res = await axios.get(`https://653cbd87d5d6790f5ec8390b.mockapi.io/user?email=${this.email}&password=${this.password}`);
      console.log(res.status);

      if (res.status === 200 && res.data.length > 0) {
        alert('Login done!');
        localStorage.setItem("user-info", JSON.stringify(res.data[0]));
        this.$router.push({ name: 'HomePage' });
      }
    },
  },
};
</script>

<style scoped>
.alert {
  color: red;
}
</style> -->












<!-- <template>
    <div>
        <img class="logo" src="../assets/restaurantLogo.jpg" alt="res-logo">
        <h1>Log In</h1>
        <div class="Login">
            <input type="text" placeholder="Enter Email" v-model="email">
            <input type="Password" placeholder="Enter Password" v-model="password">
            <button @click="login">Log In</button>
            <p>
                <router-link to="sign-up">Sign Up</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'LoginPage',
        data(){
            return{
                email:'',
                password:''
            }
        }, 
        mounted()
        {
            let user = localStorage.getItem("user-info");
            if(user)
            {
                this.$router.push({name:'HomePage'})
            }
        },
         methods:{
          async login() {
    const res = await axios.get(`https://653cbd87d5d6790f5ec8390b.mockapi.io/user?email${this.email}&password${this.password}`);
    console.log(res.status);
    if (res.status === 200 && res.data.length > 0) {
      alert('Login done!');
      localStorage.setItem("user-info", JSON.stringify(res.data[0]));
      this.$router.push({ name: 'HomePage' });
    }
    
  }
}
             

        }
    
</script>

<style scoped>

</style> -->


<!-- <template>
    <div>
      <h1>Login</h1>
      <div v-if="user">
        <p>Welcome, {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
      <div v-if="error">{{ error }}</div>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
        error: null,
        email: '', // Initialize with an empty string
        password: '', // Initialize with an empty string
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.get(`https://653cbd87d5d6790f5ec8390b.mockapi.io/user?email=${this.email}&password=${this.password}`);
          console.log("hello"+response.data)
          this.user = response.data;
          this.error = null;
        } catch (error) {
          this.error = 'Login failed. Please check your email and password.';
          this.user = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
   -->