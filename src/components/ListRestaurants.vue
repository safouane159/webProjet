<template>
  <div >
      <form  @submit="ajouterRestaurant($event)">
        <label>
            Name : <input type="text"  name="nom" >
        </label>
        <label>
            Cuisine : <input type="text" name="cuisine" >
        </label>

        <button>Ajouter</button>
    </form>
<p> recherche Restaurant <input @input="chercheResataurants()" type="text" v-model="NomAchercher"> </p>
    <h1>Nombre de restaurants : {{NbrTotalRestaurant}}</h1>
  <p><input 
    @input="getRestaurantsFromServer()"
    type="range" min=2 max=100 v-model="pageSize">{{pageSize}}</p>  
      <table>
        <tr>
            <th>Nom</th>
            <th>Cuisine </th>
        </tr>
        <tbody>
            <tr v-for="(r,index) in restaurants" 
            :key="index"
            @click="supprimerRestaurant(r._id)" 
            :style="{backgroundColor:getColor(index)}"
                :class="{bordureRouge:(index === 2)}">
                <td>{{r.name}}</td>
                <td> {{r.cuisine}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: 'listdesRestaurants',
  
  data: function(){
      return{
            restaurants: [],
            name: '',
            cuisine: '',
            NbrTotalRestaurant: 0,
            page:0,
            NomAchercher:'',
            pageSize:20
  }},
        mounted(){

console.log("avant l'affichage");
this.getRestaurantsFromServer();
        },
        methods: {
          
            getRestaurantsFromServer() {
                let Url = "http://localhost:8080/api/restaurants?";
              let  UrlComplet = Url + "page=" + this.page ; 
              UrlComplet  += "&pagesize="+ this.pageSize;
              UrlComplet  += "&name="+ this.NomAchercher;
                fetch(UrlComplet).then((responseJSON)=> {
                    responseJSON.json().then((res)=>{
                    
                        this.restaurants = res.data;
                        this.NbrTotalRestaurant = res.count;
                    }
                    )
                    
                }).catch(function() {
                    // Error :(
                });
            },
            chercheResataurants: _.debounce(function(){
                this.getRestaurantsFromServer();
            },300),
            supprimerRestaurant(restaurantId) {
                let UrlId = "http://localhost:8080/api/restaurants/" +restaurantId ;
                fetch(UrlId, {
                    method: "DELETE",
                 
                })
                .then((responseJSON) =>{
                    
                    responseJSON.json()
                        .then((resJS)=> {
                            console.log(resJS);
                        });
                    })
                    .catch(function (err) {
                        console.log(err);
                });
                this.getRestaurantsFromServer();
            },
            PageSuivant() {
                this.page = this.page +1;
                this.getRestaurantsFromServer();
            },
            PagePrecedent() {
                this.page = this.page -1;
                this.getRestaurantsFromServer();
            },
            ajouterRestaurant(event) {
                 // Pour éviter que la page ne se ré-affiche
    event.preventDefault();

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
        body: donneesFormulaire
    })
    .then((responseJSON) =>{
        
        responseJSON.json()
            .then((resJS)=> {
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
                return (index % 2) ? 'lightBlue' : 'pink';
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
