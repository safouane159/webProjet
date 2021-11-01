<template>
  <div>
    <h1 id="title1">Trouver votre restaurant</h1>

    <!-- <form  @submit="ajouterRestaurant($event)">
        <label>
            Name : <input type="text"  name="nom" >
        </label>
        <label>
            Cuisine : <input type="text" name="cuisine" >
        </label>

        <button>Ajouter</button>
    </form>


    <h1>Nombre de restaurants :</h1>
  <p><input 
    @input="getRestaurantsFromServer()"
    type="range" min=2 max=100 v-model="pageSize">{{pageSize}}</p>  -->

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
            <b-button @click="goTodetail(item._id)" variant="warning"
              >Plus d'info</b-button
            ></md-table-cell
          >
          <md-table-cell>
            <md-button
              @click="supprimerRestaurant(item._id)"
              class="md-fab md-mini"
            >
              <md-icon>delete</md-icon>
            </md-button></md-table-cell
          >
        </md-table-row>
      </md-table>
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
        <b-form @submit="ajouterRestaurant($event)">
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

          <b-form-group id="input-group-1" label="Cuisine:" label-for="input-1">
            <b-form-input
              id="input-1"
              name="cuisine"
              type="text"
              placeholder="saisissez la cuisine"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Cuisine:" label-for="input-1">
            <b-form-input
              id="input-1"
              name="borough"
              type="text"
              placeholder="saisissez la Ville"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" @click="hide" block
            >Submit</b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
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
    };
  },
  mounted() {
    console.log("avant l'affichage");
    this.getRestaurantsFromServer();
  },

  methods: {
    goTodetail(id) {
      this.$router.push("/RestaurantDetail/" + id);
    },
    

    getRestaurantsFromServer() {
      var ddl = document.getElementById("alrt");
      let Url = "http://localhost:8080/api/restaurants?";
      let UrlComplet = Url + "page=" + this.page;
      UrlComplet += "&pagesize=" + this.pageSize;
      UrlComplet += "&name=" + this.NomAchercher;
      fetch(UrlComplet)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            this.restaurants = res.data;
            this.NbrTotalRestaurant = res.count;
            if (res.count == 0) {
              ddl.style.display = "block";
            } else {
              ddl.style.display = "none";
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
      this.page = this.page + 1;
      this.getRestaurantsFromServer();
    },
    PagePrecedent() {
      this.page = this.page - 1;
      this.getRestaurantsFromServer();
    },
    ajouterRestaurant(event) {
      // Pour éviter que la page ne se ré-affiche
      var ddl = document.getElementById("idebar-backdrop");

      //An example of displaying the element
      ddl.style.display = "none";
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
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((resJS) => {
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
    onReset(event) {
      event.preventDefault();
      // Reset our form values

      this.name = "";
      this.cuisine = "";
      this.borough = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
  color: rgb(255, 213, 27);
  font-size: 90px;
  margin-top: 100px;

  text-align: center;

  font-family: cursive;
}
#res {
  color: rgb(51, 51, 51);
  font-size: 30px;
  font-family: "Gill Sans", sans-serif;
}
</style>
