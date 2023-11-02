<template>
  <div>
    <HeaderPage/>
    <h1>Update Restaurant</h1>
    <form class="add">
      <input type="text" placeholder="Enter Restaurant name" v-model="restaurant.name" name="name">
      <input type="text" placeholder="Enter Restaurant address" v-model="restaurant.address" name="address">
      <input type="text" placeholder="Enter Restaurant contact" v-model="restaurant.contact" name="contact">
      <button type="button" @click="updateRestaurant"> Update Restaurant </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue';
  export default {
    name:'UpdateRes',
    components:{
      HeaderPage
    }, data(){
      return{
          restaurant:{
            name:'',
            address:'',
            contact:''
          }
      }
    },
    methods:{
      async   updateRestaurant()
      {
        const result = await axios.put("https://api-8u0n.onrender.com/restaurant/"+this.$route.params.id,{
              name:this.restaurant.name,
              address:this.restaurant.address,
              contact:this.restaurant.contact,
        });
        if(result.status == 200 )
        {
          this.$router.push({name:'HomePage'});
        }
      }
    },
   async mounted()
        {
            let user = localStorage.getItem("user-info");
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
            const res = await axios.get(`https://api-8u0n.onrender.com/restaurant/${this.$route.params.id}`)
            this.restaurant = res.data
        },
  }
</script>

<style scoped>

</style>