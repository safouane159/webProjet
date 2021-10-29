<template>
  <div id="app">
   
  <b-row id="row"><b-col id="first" sm="2"> <div id="menu" >
      <Menu />
      </div></b-col>
    <b-col id="second" sm="9">
   
      <div id="mymain">
  <router-view></router-view> </div></b-col>
  </b-row>


    
  

 

    
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#first {
  background-color: rgb(252, 243, 218);
padding: 0%;
}
#row {
  height: 100%;
}
#second {
  
padding: 0%;
}
#mymain {
  
height: 100%;
 
  margin-top: 0px;
}
#app {
  height: 1000px;
  
  text-align: center;
  
  
 
}
#body {
  background-image: url('./assets/BG.png');
  background-repeat: no-repeat;;


background-size: cover;
 
}
</style>
