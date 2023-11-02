<template>
    <div class="nav">
       <router-link to="/"> Home </router-link> 
       <router-link to="/add-res"> Add Restaurant </router-link> 
       <a @click="logout" href="#"> Log out </a> 
    </div>
</template>

<script>
    export default {
        name:"HeaderPage",
        methods:{
            logout()
            {
               localStorage.clear();
               this.$router.push({name:'LoginPage'})
            }
        },
    }
</script>

<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
    padding-left: 25px;
    padding-right: 25px;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
    border-radius: 7px;
}
</style>