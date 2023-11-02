<!-- <template>
    <div>
        <img class="logo" src="../assets/restaurantLogo.jpg" alt="res-logo">
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" placeholder="Enter Name" v-model="name">
            <input type="text" placeholder="Enter Email" v-model="email">
            <input type="Password" placeholder="Enter Password" v-model="password">
            <button @click="signUp">Sign Up</button>
            <p>
                <router-link to="log-in">Log In</router-link>
            </p>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'SignUp',
        data(){
            return{
                name:'',
                email:'',
                password:''
            }
        },
        mounted()
        {
            let user = localStorage.getItem("user-info");
            if(user)
            {
                this.$router.push({name:'LoginPage'})
            }
        },
        methods:{
           async signUp(){
                console.log("signup",this.name,this.email,this.password)
                let result = await axios.post("https://653cbd87d5d6790f5ec8390b.mockapi.io/user",{
                    name:this.name,
                    email:this.email,
                    password:this.password
                });
                console.warn(result)
                if(result.status == 201 )
                {
                alert('SignUp done!')
                }
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'LoginPage'})
            }
        }
    }
</script>

<style scoped>

</style> -->

<template>
    <div>
      <img class="logo" src="../assets/restaurantLogo.jpg" alt="res-logo">
      <h1>Sign Up</h1>
      <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button @click="validateAndSignUp">Sign Up</button>
        <p>
          <router-link to="log-in">Log In</router-link>
        </p>
      </div>
      <div v-if="showAlert" class="alert">
        Please fill in all the details before signing up.
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        showAlert: false, // Flag to control the alert message
      };
    },
    methods: {
      async validateAndSignUp() {
        if (this.name.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
          // Show an alert and prevent redirection
          this.showAlert = true;
          return;
        }
  
        this.showAlert = false; // Hide the alert
        console.log("signup", this.name, this.email, this.password);
        let result = await axios.post("https://api-8u0n.onrender.com/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
  
        console.warn(result);
  
        if (result.status === 201) {
          alert('Sign Up done!');
        //   this.$router.push({ name: 'LoginPage' });
        this.$router.push({ name: 'LoginPage' });        }
  
        localStorage.setItem("user-info", JSON.stringify(result.data));
      },
    },
  };
  </script>
  
  <style scoped>
  .alert {
    color: red;
  }
  </style>

  













