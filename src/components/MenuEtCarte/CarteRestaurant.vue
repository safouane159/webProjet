<template>
  <div id="cartel">
    
 
     <h1 class="titlreCarte">Nos Entrées </h1>
  

  {{wsl.carteEntree[0].name}}.........  {{wsl.carteEntree[0].prix}} € <br>
  {{wsl.carteEntree[1].name}}.........  {{wsl.carteEntree[1].prix}} €<br>
  {{wsl.carteEntree[2].name}}.........  {{wsl.carteEntree[2].prix}} €<br>
  {{wsl.carteEntree[3].name}}.........  {{wsl.carteEntree[3].prix}} €<br>


     
     <hr data-content="AND" class="hr-text">
<div>
  <h1 class="titlreCarte" >Nos Plats</h1>
 <b-row>
   <b-col class="mrgni">
      
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>
   <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>
     <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
<div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>

  </b-col><b-col>
  <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       
      </b-col>
    </b-row>
</b-col>
 </b-row>

</div>
 <hr data-content="AND" class="hr-text">
    
    
<div>
  <h1 class="titlreCarte" >Nos Dessert</h1>
  {{wsl.carteDessert[0].name}}.........  {{wsl.carteDessert[0].prix}} € <br>
  {{wsl.carteDessert[1].name}}.........  {{wsl.carteDessert[1].prix}} €<br>
  {{wsl.carteDessert[2].name}}.........  {{wsl.carteDessert[2].prix}} €<br>
  {{wsl.carteDessert[3].name}}.........  {{wsl.carteDessert[3].prix}} €<br>


</div>

    
     <hr data-content="AND" class="hr-text">



    <div>
       <h1 class="titlreCarte" >Nos Boissons</h1>
  {{wsl.carteBoissons[0].name}}.........  {{wsl.carteBoissons[0].prix}} € <br>
  {{wsl.carteBoissons[1].name}}.........  {{wsl.carteBoissons[1].prix}} €<br>
  {{wsl.carteBoissons[2].name}}.........  {{wsl.carteBoissons[2].prix}} €<br>
  {{wsl.carteBoissons[3].name}}.........  {{wsl.carteBoissons[3].prix}} €<br>


    </div>
  </div>

  <!-- <h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}} -->
</template>

<script>
export default {
  name: "Carte",
  props: ['wsl'],
  data: function () {
    return {
     

      restaurant: null,
    };
  },

  methods: {



  },
 
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlreCarte {
  font-family: Lucida Sans;
  font-size: 20px;
  color: rgb(194, 78, 0);
}
.mrgni {
  padding-left: 20px ;
}
#cartel {
  padding-top: 10px;
  padding-left: 10px;
}
.sr {
padding: 0px;
}
#entreepara {
 height: 100px;
}


</style>
