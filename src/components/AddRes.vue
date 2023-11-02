<template>
  <div>
    <HeaderPage/>
      <h1>Add New Restaurant</h1>
      <form class="add">
        <input type="text" placeholder="Enter Restaurant name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Restaurant address" v-model="restaurant.address" name="address">
        <input type="text" placeholder="Enter Restaurant contact" v-model="restaurant.contact" name="contact">
        <button type="button" @click="addRestaurant"> Add new restaurant </button>
      </form>
  </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
  export default {
    name:'AddRes',
    components:{
      HeaderPage
    },
    data(){
      return{
          restaurant:{
            name:'',
            address:'',
            contact:''
          }
      }
    },
    mounted()
        {
            let user = localStorage.getItem("user-info");
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
        },
        methods:{
        async  addRestaurant(){
            console.warn(this.restaurant)
            const res = await axios.post("https://api-8u0n.onrender.com/restaurant",{
              name:this.restaurant.name,
              address:this.restaurant.address,
              contact:this.restaurant.contact,
        });
        if(res.status == 201 )
        {
          this.$router.push({name:'HomePage'});
        }
          }
        }
  }
</script>

<style scoped>

</style>