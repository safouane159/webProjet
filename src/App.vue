<template>
  <div id="app">
   
  <b-row id="row"><b-col id="first" sm="2"> <div id="menu" >
      <Menu />
      </div></b-col>
    <b-col id="second" sm="10">
   
      
  <router-view></router-view> </b-col>
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

text-align: center;
}
#row {
  
  margin-right:10px ;
  height: 100%;
}
#second {
  height: 100%;

}

#app {
  height: 1000px;
  
  
  
  
 
}
#body {
   
  background-image: url('./assets/BG.png');
  background-repeat: no-repeat;


background-size: cover;
 
}

</style>
