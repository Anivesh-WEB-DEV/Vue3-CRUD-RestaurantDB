<template>
  <div>
    <HeaderPage/>
    <h1>Hello Mr {{ name }} , This is Data of Restaurants</h1>
    <table border="1">
      <tr>
       
        <td><strong>Name</strong></td>
        <td><strong>Address</strong></td>
        <td><strong>Contact</strong></td>
        <td><strong>Actions</strong></td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
     
        <td> {{ item.name }} </td>
        <td> {{ item.address }} </td>
        <td> {{ item.contact }} </td>
        <td>
           <router-link :to="'/update-res/'+item.id"> Update </router-link>
          <button @click="deleteRestaurant(item.id)">Delete</button>
          </td>

      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue';
  export default {
    name:'HomePage',
    data(){
      return{
        name:'',
        restaurants:[]
      }
    },
    components:{
      HeaderPage
    },
     mounted()
        {
      
           this.loadResData()
        },
        methods:{
         async deleteRestaurant(id)
          {
            const res = await axios.delete("https://api-8u0n.onrender.com/restaurant/"+id);
             console.log(res)
            if(res.status == 200)
            {
              alert('Restaurant Deleted')
              this.loadResData()
            }
          },
          async loadResData()
          {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get("https://api-8u0n.onrender.com/restaurant");
          
            this.restaurants = result.data
          }
        }
  }
</script>

<style scoped>
td{
  width: 227px;
  height: 40px;
}
td a{
    text-decoration: none;
    color: red;
    border: 2px solid red;
    padding: 5px;
    border-radius: 5px;
}
td a:hover{
  color: white;
  background-color: rgb(255 123 123);
  border: none;
  transition: ease-in-out;
}
td button{
  background-color: white;
    text-decoration: none;
    color: red;
    border: 2px solid red;
    padding: 5px;
    border-radius: 5px;
    margin-left: 12px;
    font-size: 16px;
}
td button:hover{
  color: white;
  background-color: rgb(255 123 123);
  border: none;
}
table{
  margin-right: auto;
  margin-left: auto;
}
</style>





<!-- 


<template>
  <Header>
   <HeaderPage />
   <h1>welcome to {{ name }} Homepage</h1>
   <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contact }}</td>        
    <td><router-link :to="'/update/'+item.id">Update</router-link></td>      
    <button v-on:click="deleteRestaurant(item.id)">Delete</button>  
    </tr>
   </table>
  </Header>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderPage from './HeaderPage.vue';
  export default {
   name: "HomePage",
   components: {
    HeaderPage,
   },
   data() {
    return {
     name: '',
    restaurants:[]
    }
   },
    methods:{
   async deleteRestaurant(id){
  
    let result= await axios.delete("https://my-json-server.typicode.com/Anivesh-WEB-DEV/user/restaurant/"+id)
    if(result.status===200){
      let user = localStorage.getItem('user-info');
    this.name=JSON.parse(user).name
    if (!user) {
     this.$router.push({
      name: "SignUp"
     });
    }
    let result= await axios.get("https://my-json-server.typicode.com/Anivesh-WEB-DEV/user/restaurant")
    console.warn(result)
    this.restaurants=result.data
    }
  }
   },
  
   async mounted() {
  let user = localStorage.getItem('user-info');
    this.name=JSON.parse(user).name
    if (!user) {
     this.$router.push({
      name: "SignUp"
     });
    }
    let result= await axios.get("https://my-json-server.typicode.com/Anivesh-WEB-DEV/user/restaurant")
    console.warn(result)
    this.restaurants=result.data
   }
  }
  </script>
  
  <style>
  td{
    width: 160px;
    height: 40px;
  }
  </style> -->