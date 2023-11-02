<template>
 <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.logo{
  width: 200px;
  height: 150px;
  border-radius: 14%;
}

.register input, .Login input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
  border-radius: 24px;
  font-size: 20px;
}
.register button , .Login button, .add button {
  width: 314px;
  height: 46px;
  border-radius: 28px;
  background-color: rgb(139, 210, 239);
  font-size: 23px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
.Login p a,.register p a{
  display: block;
  width: 309px;
  height: 36px;
  border-radius: 28px;
  background-color: rgb(139, 210, 239);
  text-decoration: none;
  font-size: 23px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 0px;
}

</style>
