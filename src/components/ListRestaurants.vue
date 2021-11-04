<template>
  <div>
    <h1 id="title1">Trouver votre restaurant</h1>


    <div id="tab">
      <md-table-toolbar>
        <b-col>
          <md-button
            class="md-fab md-mini md-primary"
            v-b-toggle.sidebar-backdrop
          >
            <md-icon>add</md-icon>
          </md-button>
        </b-col>
        <b-col>
          <h1 id="res">Résulat : {{ NbrTotalRestaurant }}</h1>
        </b-col>
        <b-col cols="3">
          <md-field md-clearable class="md-toolbar-section-end">
            <md-input
              placeholder="Search..."
              v-model="NomAchercher"
              @input="chercheResataurants()"
            />
          </md-field>
        </b-col>
      </md-table-toolbar>
      <b-alert show variant="warning" id="alrt"
        >aucun restaurant ne correspond à votre recherche</b-alert
      >
      <md-table id="inside" v-model="restaurants" md-card md-fixed-header>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Cuisine"> {{ item.cuisine }}</md-table-cell>
          <md-table-cell md-label="Ville"> {{ item.borough }}</md-table-cell>

          <md-table-cell>
            <b-button v-on:click="goTodetail(item._id)" variant="warning"
              >Plus d'info</b-button
            ></md-table-cell
          >
          <md-table-cell>
            <md-button
              v-on:click="supprimerRestaurant(item._id)"
              class="md-fab md-mini"
            >
              <md-icon>delete</md-icon>
            </md-button></md-table-cell
          >
        </md-table-row>
      </md-table>
      
   
    </div>
<div id="mylovelybuttons2">
  
  <b-button type="reset" variant="danger" :disabled="page ===0 " v-on:click="PagePrecedent()">PagePrecedent</b-button>
      <b-button type="submit" variant="primary" :disabled="page===NbrTotalpage"  v-on:click="PageSuivant()">PageSuivant</b-button>
      
      </div>
 
 <b-sidebar
      id="sidebar-backdrop"
      title="Ajouter Un Restaurant"
      :backdrop-variant="variant"
      backdrop
      right
      no-header
      shadow
    >
      <div class="px-3 py-2">
          <h2>Ajouter Restaurant</h2>
           <b-alert show variant="success" id="suc">Restaurant ajouté avec success</b-alert>
        <b-form   @submit="ajouterRestaurant($event)" >
            <hr data-content="AND" class="hr-text">
         <b-form-group
        id="input-group-1"
        label="Restaurant Name:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          name="nom" 
         
          type="text"
          placeholder="saisissez le name"
          required
        ></b-form-input>
      </b-form-group>
         <hr data-content="hello" class="hr-text">
<b-form-group
        id="input-group-1"
        label="Cuisine:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          name="cuisine" 
         
          type="text"
          placeholder="saisissez la cuisine"
          required
        ></b-form-input>

      </b-form-group>
        <hr data-content="AND" class="hr-text">
      <b-form-group
        id="input-group-1"
        label="Ville:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          name="borough" 
         
          type="text"
          placeholder="saisissez la Ville"
          required
        ></b-form-input>
      </b-form-group>
      <div id="mylovelybuttons">
      <b-button type="submit" variant="primary"  @click="hide"  hide>Submit</b-button>
      <b-button type="reset" variant="danger" v-on:click="hidd()">Reset</b-button>
      </div>
    </b-form>
      </div>
       
    </b-sidebar>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "listdesRestaurants",

  data: function () {
    return {
      variant: "dark",
      restaurants: [],
      name: "",
      cuisine: "",
      borough: "",
      NbrTotalRestaurant: 0,
      page: 0,
      NomAchercher: "",
      pageSize: 20,
      idR :0,
      NbrTotalpage:0,
Listname: ["Retour de marché ","Grande Table","Signature Marine","Le menu Terroir ","Menu du Blad","Menu Abdelhadi kessel"],
      CarteFinal:{ carteEntree:[],carteDessert:[],carteBoissons:[],cartePlat:[],
          Menu:{nom:[] , Entree :[],plat:[],Dessert:[]  }},
      
      
      
      
      ListBoissons:[{name: "Coca", prix: 2},{name:"Ice tea", prix: 2},{name:"Vin Rouge", prix: 2},{name:"Vin Rosé", prix: 2},{name:"Coca zero", prix: 2}],
      ListEntre:[{name:"Velouté de potimarron aux cèpes", prix: 2},{name:"Salade sapin de Noël", prix: 2},{name:"Œufs mimosa aux œufs de saumon", prix: 2},{name:"Salade de crabe", prix: 2},{name:"Mousse avocat saumon", prix: 2}],
      ListDessert:[{name:"Tarte au citron meringuée", prix: 3.5},{name:"Fondant chocolat cœur coulant", prix: 3.5},{name:"Crumble aux pommes caramélisées maison", prix: 3.5},{name:"Tiramisu au café fort", prix: 3.5},{name:"Glace à la vanille", prix: 3.5},{name:"Petits moelleux chocolat et spéculoos", prix: 3.5},{name:"Crème brûlée rapide", prix: 3.5},{name:"Panna cotta vanille et citron", prix: 3.5},{name:"Crêpes Suzette au Grand Marnier", prix: 3.5},{name:"tarte aux Daims", prix: 3.5}],
      ListPlats:[{ name: 'Tajine',desc:'trés bon',img:'',prix:23 },
      { name: 'Couscous',desc:'trés bon',img:'',prix:23 },
      { name: 'A',desc:'trés bon',img:'none',prix:23 },
      { name: 'B',desc:'trés bon',img:'none',prix:23 },
      { name: 'C',desc:'trés bon',img:'none',prix:23 },
      { name: 'D',desc:'trés bon',img:'none',prix:23 },
      { name: 'E',desc:'trés bon',img:'none',prix:23 },
      { name: 'F',desc:'trés bon',img:'none',prix:23 },
      { name: 'J',desc:'trés bon',img:'none',prix:23 }]

    };
  },
  mounted() {
    console.log("avant l'affichage");
    this.getRestaurantsFromServer();
  },

  methods: {







    goTodetail(id) {
this.generateRandomCarte();

this.idR = id ;

      this.$router.push({name: 'RestaurantDetail' ,params:{id:this.idR , obj:  this.CarteFinal }});
    },generateRandomCarte(){
 


// 4 boisson
  let ListTaken = this.ListBoissons;
  let random = 0;
  
for (let i = 0; i < 4; i++) {
  
 do{
//generate random number 
   random = this.getRandomInt(0,this.ListBoissons.length+1);

 }while(ListTaken.includes(ListTaken[random]) == false)

this.CarteFinal.carteBoissons.push(ListTaken[random] );

this.removeItem(ListTaken,ListTaken[random] );
    
   


}

  
  // 4 entré
let ListTaken1 = this.ListEntre;
  let random1 = 0;
  
for (let i = 0; i < 4; i++) {
  
 do{

   random1 = this.getRandomInt(0,this.ListEntre.length+1);

 }while(ListTaken1.includes(ListTaken1[random1]) == false)

this.CarteFinal.carteEntree.push(ListTaken1[random1] );
if (i < 3){
this.CarteFinal.Menu.Entree.push(ListTaken1[random1] );

}
//alert(this.CarteFinal.Menu.Entree[i].name)


this.removeItem(ListTaken1,ListTaken1[random1] );
    
   


}

  //4 dessert 
let ListTaken2 = this.ListDessert;
  let random2 = 0;
  
for (let i = 0; i < 4; i++) {
  
 do{

   random2 = this.getRandomInt(0,this.ListDessert.length+1);

 }while(ListTaken2.includes(ListTaken2[random2]) == false)

this.CarteFinal.carteDessert.push(ListTaken2[random2] );
if (i < 3){
this.CarteFinal.Menu.Dessert.push(ListTaken2[random2] );}
this.removeItem(ListTaken2,ListTaken2[random2] );
    
   


}

  //6 plats 
let ListTaken3 = this.ListPlats;
  let random3 = 0;
  
for (let i = 0; i < 6; i++) {
  
 do{

   random3 = this.getRandomInt(0,this.ListPlats.length+1);

 }while(ListTaken3.includes(ListTaken3[random3]) == false)

this.CarteFinal.cartePlat.push(ListTaken3[random3] );
if (i < 3){
this.CarteFinal.Menu.plat.push(ListTaken3[random3] );}
this.removeItem(ListTaken3,ListTaken3[random3] );
 }  
  
//generate 3 menu name
 let Taken1 = this.Listname;

  let Mrandom1 = 0;
 
for (let i = 0; i < 3; i++) {
  
 do{
//generate random number 
   Mrandom1 = this.getRandomInt(0,this.Listname.length+1);
   
 }while(Taken1.includes(Taken1[Mrandom1]) == false)

this.CarteFinal.Menu.nom.push(Taken1[Mrandom1] );

this.removeItem(Taken1,Taken1[Mrandom1] );

  


}





 },
     removeItem(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
},
    hidd:function( ){
var ddl = document.getElementById("suc"); 

    ddl.style.display = "none";
    },
    getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
    ,

    getRestaurantsFromServer() {
      var ddl3 = document.getElementById("alrt");
      let Url = "http://localhost:8080/api/restaurants?";
      let UrlComplet = Url + "page=" + this.page;
      UrlComplet += "&pagesize=" + this.pageSize;
      UrlComplet += "&name=" + this.NomAchercher;
      fetch(UrlComplet)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            this.restaurants = res.data;
            this.NbrTotalRestaurant = res.count;
                this.NbrTotalpage = Math.round(this.NbrTotalRestaurant/ this.pageSize);
            if (res.count == 0) {
              ddl3.style.display = "block";
            } else {
              ddl3.style.display = "none";
            }
          });
        })
        .catch(function () {
          // Error :(
        });
    },
    chercheResataurants: _.debounce(function () {
      this.getRestaurantsFromServer();
    }, 300),
    supprimerRestaurant(restaurantId) {
      let UrlId = "http://localhost:8080/api/restaurants/" + restaurantId;
      fetch(UrlId, {
        method: "DELETE",
      })
        .then((responseJSON) => {
          responseJSON.json().then((resJS) => {
            console.log(resJS);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.getRestaurantsFromServer();
    },
     
    PageSuivant() {
       if (this.page == this.NbrTotalpage) return;
      this.page = this.page + 1;
      this.getRestaurantsFromServer();
    },
     
    PagePrecedent() {
      if (this.page == 0) return;
      this.page = this.page - 1;
      this.getRestaurantsFromServer();
    },
    ajouterRestaurant(event) {
      // Pour éviter que la page ne se ré-affiche
   
  event.preventDefault();
      //An example of displaying the element
      
      //An example of displaying the element
     
     


      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;
      console.log(form);
      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      let url = "http://localhost:8080/api/restaurants";

      fetch(url, {
        method: "POST",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((resJS) => {
             var ddl = document.getElementById("suc"); 

    ddl.style.display = "block";

            console.log(resJS);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.name = "";
      this.cuisine = "";
    
      
    },
    getColor(index) {
      return index % 2 ? "lightBlue" : "pink";
    },
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#tab {
    background-color: rgb(255, 255, 255);
    padding-top: 10px;
  margin-top: 100px;
   margin-left: 30px;
   margin-right: 30px;
 
}
#title1 {
   
     color:rgb(255, 213, 27);
    font-size: 90px;
    margin-top: 70px;
 
    text-align: center;
 
  font-family: cursive;
 
 
}
#res {
   
     color:rgb(51, 51, 51);
    font-size: 30px;
 font-family: "Gill Sans", sans-serif;
}
#suc {
   
   display: none;
}
#colA,#colB {
   text-align:left;
    
}
hr.hr-text {
  position: relative;
    border: none;
    height: 1px;
    background: #999;
}
hr.hr-text::before {
    content: attr(data-content);
    display: inline-block;
    background: #fff;
    font-weight: bold;
    font-size: 0.85rem;
    color: #999;
    border-radius: 30rem;
    padding: 0.2rem 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#mylovelybuttons{
  margin-top: 20px;
}
#mylovelybuttons2{
  margin-left: 30px;
}
#alrt{
  display: none;
}
</style>
