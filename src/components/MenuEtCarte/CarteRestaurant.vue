<template>
  <div id="cartel">
    
 
     <h1 class="titlreCarte">Nos Entrées </h1>
  

  <md-button v-on:click="addP(wsl.carteEntree[0].prix,wsl.carteEntree[0].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button>{{wsl.carteEntree[0].name}}.........  {{wsl.carteEntree[0].prix}} € <br> 
  <md-button  v-on:click="addP(wsl.carteEntree[1].prix,wsl.carteEntree[1].name)" class=" md-icon-button  petit "><md-icon class="md-size-0x">add</md-icon></md-button>{{wsl.carteEntree[1].name}}.........  {{wsl.carteEntree[1].prix}} €<br>
  <md-button v-on:click="addP(wsl.carteEntree[2].prix,wsl.carteEntree[2].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button>{{wsl.carteEntree[2].name}}.........  {{wsl.carteEntree[2].prix}} €<br>
  <md-button  v-on:click="addP(wsl.carteEntree[3].prix,wsl.carteEntree[3].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteEntree[3].name}}.........  {{wsl.carteEntree[3].prix}} €<br>


     
     <hr data-content="AND" class="hr-text">
<div>
  <h1 class="titlreCarte" >Nos Plats</h1>
 <b-row>
   <b-col class="mrgni">
      
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
        <div> <md-button  v-on:click="addP(wsl.cartePlat[0].prix,wsl.cartePlat[0].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
       
      </b-col>
    </b-row>
   <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
        <div> <md-button v-on:click="addP(wsl.cartePlat[1].prix,wsl.cartePlat[1].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
       
      </b-col>
    </b-row>
     <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
<div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
        <div> <md-button v-on:click="addP(wsl.cartePlat[2].prix,wsl.cartePlat[2].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
       
      </b-col>
    </b-row>

  </b-col><b-col>
  <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
        <div> <md-button v-on:click="addP(wsl.cartePlat[3].prix,wsl.cartePlat[3].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
       
      </b-col>
    </b-row>
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
        <div> <md-button v-on:click="addP(wsl.cartePlat[4].prix,wsl.cartePlat[4].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
       
      </b-col>
    </b-row>
    <b-row  class="sr">
      <b-col md="4" class="sr">
        <b-card-img src='../tajin.jpeg' class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8" >
       <div> {{wsl.cartePlat[1].name}} </div>
       <div> {{wsl.cartePlat[1].desc}} </div>
        <div>{{wsl.cartePlat[1].prix}} €</div>
       <div> <md-button v-on:click="addP(wsl.cartePlat[5].prix,wsl.cartePlat[5].name)" class=" md-icon-button  petit btn3 "><md-icon>add</md-icon></md-button></div>
        </b-col>
      
      
    </b-row>
</b-col>
 </b-row>

</div>
 <hr data-content="AND" class="hr-text">
    
    
<div>
  <h1 class="titlreCarte" >Nos Dessert</h1>
  <md-button v-on:click="addP(wsl.carteDessert[0].prix,wsl.carteDessert[0].name)"  class=" md-icon-button  petit "><md-icon>add</md-icon></md-button>  {{wsl.carteDessert[0].name}}.........  {{wsl.carteDessert[0].prix}} € <br>
  <md-button v-on:click="addP(wsl.carteDessert[0].prix,wsl.carteDessert[1].name)"  class=" md-icon-button  petit "><md-icon>add</md-icon></md-button>  {{wsl.carteDessert[1].name}}.........  {{wsl.carteDessert[1].prix}} €<br>
  <md-button v-on:click="addP(wsl.carteDessert[0].prix,wsl.carteDessert[2].name)"  class=" md-icon-button  petit "><md-icon>add</md-icon></md-button>  {{wsl.carteDessert[2].name}}.........  {{wsl.carteDessert[2].prix}} €<br>
   <md-button v-on:click="addP(wsl.carteDessert[0].prix,wsl.carteDessert[3].name)"  class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteDessert[3].name}}.........  {{wsl.carteDessert[3].prix}} €<br>


</div>

    
     <hr data-content="AND" class="hr-text">



    <div>
       <h1 class="titlreCarte" >Nos Boissons</h1>
   <md-button v-on:click="addP(wsl.carteBoissons[0].prix,wsl.carteBoissons[0].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteBoissons[0].name}}.........  {{wsl.carteBoissons[0].prix}} € <br>
   <md-button v-on:click="addP(wsl.carteBoissons[1].prix,wsl.carteBoissons[1].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteBoissons[1].name}}.........  {{wsl.carteBoissons[1].prix}} €<br>
   <md-button v-on:click="addP(wsl.carteBoissons[2].prix,wsl.carteBoissons[2].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteBoissons[2].name}}.........  {{wsl.carteBoissons[2].prix}} €<br>
   <md-button v-on:click="addP(wsl.carteBoissons[3].prix,wsl.carteBoissons[3].name)" class=" md-icon-button  petit "><md-icon>add</md-icon></md-button> {{wsl.carteBoissons[3].name}}.........  {{wsl.carteBoissons[3].prix}} €<br>


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
     myid:0,
dataToSens:{name:"",price:0},
      
    };
  },

  methods: {
addP:function(Price,name){
var ddl4 = document.getElementById("t3");
  var ddl3 = document.getElementById("carteI");
ddl3.style.marginLeft = '0px';
ddl3.style.width = '1480px';
ddl4.style.display = 'block';

  this.dataToSens.id = this.myid;
this.dataToSens.name = name;
this.dataToSens.price = Price;

  //

  this.$emit('addPrice',this.dataToSens)
  this.myid = this.myid+1;
}


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
 
  padding-left: 10px;
}
.sr {
padding: 0px;
}
.petit {
  width: 13;
  background-color: green;
height:25px;
color:white;
}

#entreepara {
 height: 100px;
}
.btn3 {
margin: 0px;
    margin-top: 10px;
}

</style>
