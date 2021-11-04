<template>
  <div >
   <h1 class="titlreCarte2">Nos Menu</h1>
   <hr data-content="AND" class="hr-text">
    <div>
 <h1 class="menutitle">{{CarteEtMenu.Menu.nom[0]}}</h1>
<b-row  class="sr1">
      <b-col md="4" class="sr1">
        <b-card-img src='../tajin.jpeg' class="aji" ></b-card-img>

      </b-col>
      <b-col md="6" >
        <br>
  <span class="lis"> Entré : </span>  {{CarteEtMenu.Menu.Entree[0].name}}   <br><br>
   <span class="lis">Plat : </span>  {{CarteEtMenu.Menu.plat[0].name}} <br><br>
   <span class="lis">Dessert : </span>  {{CarteEtMenu.Menu.Dessert[0].name}}<br><br>
   
   <span class="lis1"> {{CarteEtMenu.Menu.price[0]}} €</span>
      </b-col>
    </b-row>


    </div>
    <div>
      <hr data-content="AND" class="hr-text">
<h1 class="menutitle">{{CarteEtMenu.Menu.nom[1]}}</h1>
<b-row  class="sr1">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="aji"></b-card-img>

      </b-col>
      <b-col md="6" class="infol" >
        <br>
  <span class="lis"> Entré : </span>  {{CarteEtMenu.Menu.Entree[1].name}}   <br><br>
   <span class="lis">Plat : </span>  {{CarteEtMenu.Menu.plat[1].name}} <br><br>
   <span class="lis">Dessert : </span>  {{CarteEtMenu.Menu.Dessert[1].name}}<br><br>
  
   <span class="lis1"> {{CarteEtMenu.Menu.price[1]}} €</span>
      </b-col>
    </b-row>

      
    </div>
    <hr data-content="AND" class="hr-text">
    <div>
<h1 class="menutitle">{{CarteEtMenu.Menu.nom[2]}}</h1>

<b-row  class="sr1">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="aji"></b-card-img>

      </b-col>
      <b-col md="6" >
        <br>
  <span class="lis"> Entré : </span>  {{CarteEtMenu.Menu.Entree[2].name}}   <br><br>
   <span class="lis">Plat : </span>  {{CarteEtMenu.Menu.plat[2].name}} <br><br>
   <span class="lis">Dessert : </span>  {{CarteEtMenu.Menu.Dessert[2].name}}<br><br>
   
   <span class="lis1"> {{CarteEtMenu.Menu.price[2]}} €</span>
      </b-col>
    </b-row>
      
    </div>
  </div>

  <!-- <h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}} -->
</template>

<script>
export default {
  name: "MenuRestaurant",
  props: ['CarteEtMenu']
    
  ,
  data: function () {
    return {
     price1 :0

    };
  },
mounted(){
  
   
},
  methods: {
clacule_prix(prix1,prix2,prix3){
  return prix1+prix2+prix3
}


  },
 
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.titlreCarte2 {
  font-family: Lucida Sans;
  font-size: 30px;
  color: rgb(194, 78, 0);
}
.lis {
  font-family: Lucida Sans;
  font-size: 20px;
  color: rgb(240, 68, 0);
}
.lis1 {
  font-family: Lucida Sans;
  font-size: 25px;
  color: rgb(0, 0, 0);
}
.menutitle {
  font-family:  cursive;
  font-size: 30px;
  color: rgb(173, 50, 1);
}
.sr1 {
  height: 200px;
}
.aji {
  height: 150px;
}
.infol {
  height: 150px;
}


</style>
