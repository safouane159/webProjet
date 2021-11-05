<template>
  <div>
    <h1 id="title1">Trouver votre restaurant</h1>
    <!------------------  tableau des restaurant ----------------------->
    <div id="tab">
      <md-table-toolbar>
        <b-col>
          <md-button
            class="md-fab md-mini md-primary"
            v-b-toggle.sidebar-backdrop
          >
            <!------------------  button d'ajout restaurant ----------------------->
            <md-icon>add</md-icon>
          </md-button>
        </b-col>
        <b-col>
          <!------------------ le nombre total des restaurant  ----------------------->
          <h1 id="res">Résulat : {{ NbrTotalRestaurant }}</h1>
        </b-col>
        <b-col cols="3">
          <md-field md-clearable class="md-toolbar-section-end">
            <!------------------ recherche un restaurant ----------------------->
            <md-input
              placeholder="Search..."
              v-model="NomAchercher"
              @input="chercheResataurants()"
            />
          </md-field>
        </b-col>
      </md-table-toolbar>
      <!------------------ pour alerter en cas ou y a 0 resultat  ----------------------->
      <b-alert show variant="warning" id="alrt"
        >aucun restaurant ne correspond à votre recherche</b-alert
      >
      <md-table id="inside" v-model="restaurants" md-card md-fixed-header>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Cuisine"> {{ item.cuisine }}</md-table-cell>
          <md-table-cell md-label="Ville"> {{ item.borough }}</md-table-cell>

          <md-table-cell>
            <!------------------ pour aller au details d'un restaurant ----------------------->
            <b-button v-on:click="goTodetail(item._id)" variant="warning"
              >Plus d'info</b-button
            ></md-table-cell
          >
          <md-table-cell>
            <!------------------ supprimer un restaurant ----------------------->
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
    <!------------------ button : Page Precedent et Page Suivant ----------------------->
    <div id="mylovelybuttons2">
      <b-button
        type="reset"
        variant="danger"
        :disabled="page === 0"
        v-on:click="PagePrecedent()"
        >PagePrecedent</b-button
      >
      <b-button
        type="submit"
        variant="primary"
        :disabled="page === NbrTotalpage"
        v-on:click="PageSuivant()"
        >PageSuivant</b-button
      >
    </div>
    <!------------------ side bar pour ajouter un restaurant  ----------------------->
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
        <b-alert show variant="success" id="suc"
          >Restaurant ajouté avec success</b-alert
        >
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
          <hr data-content="hello" class="hr-text" />
          <b-form-group id="input-group-1" label="Cuisine:" label-for="input-1">
            <b-form-input
              id="input-1"
              name="cuisine"
              type="text"
              placeholder="saisissez la cuisine"
              required
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-1" label="Ville:" label-for="input-1">
            <b-form-input
              id="input-1"
              name="borough"
              type="text"
              placeholder="saisissez la Ville"
              required
            ></b-form-input>
          </b-form-group>
          <div id="mylovelybuttons">
            <b-button type="submit" variant="primary" @click="hide" hide
              >Submit</b-button
            >
            <b-button type="reset" variant="danger" v-on:click="hidd()"
              >Reset</b-button
            >
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
      idR: 0,
      NbrTotalpage: 0,

      //------------------------ des données static pour generer une carte et des menu ------------->
      Listname: [
        "Retour de marché ",
        "Grande Table",
        "Signature Marine",
        "Le menu Terroir ",
        "Menu du Blad",
        "Menu Hungarian sausage",
        "Menu Cozzy ",
        "Alabama Soul",
        "The frensh Quarter",
        "Menu gourmande",
        "Menu Texas",
        "Menu italiano ",
        "Menu trois moulins",
      ],
      CarteFinal: {
        carteEntree: [],
        carteDessert: [],
        carteBoissons: [],
        cartePlat: [],
        Menu: { nom: [], Entree: [], plat: [], Dessert: [], price: [] },
      },

      ListBoissons: [
        { name: "Coca", prix: 2 },
        { name: "Ice tea", prix: 2 },
        { name: "Vin Blanc", prix: 3.5 },
        { name: "Muscat", prix: 2.5 },
        { name: "Coup de champagne", prix: 3 },
        { name: "Vin Rouge", prix: 3.5 },
        { name: "Vin Rosé", prix: 3.5 },
        { name: "Coca zero", prix: 2 },
        { name: "Tea marocaine", prix: 1.5 },
      ],
      ListEntre: [
        { name: "Salade niçoise", prix: 6.5 },
        { name: "Raviole de homard ", prix: 7 },
        { name: "Céleri rémoulade", prix: 6 },
        { name: "Salade de légumes", prix: 7 },
        { name: "Escargots de Bourgogne", prix: 11 },
        { name: "Velouté de potimarron aux cèpes", prix: 8 },
        { name: "Salade sapin de Noël", prix: 12 },
        { name: "Œufs mimosa aux œufs de saumon", prix: 16 },
        { name: "Salade de crabe", prix: 7 },
        { name: "Mousse avocat saumon", prix: 9 },
      ],
      ListDessert: [
        { name: "Tarte au citron meringuée", prix: 3.5 },
        { name: "Fondant chocolat cœur coulant", prix: 6.5 },
        { name: "Crumble aux pommes caramélisées maison", prix: 10 },
        { name: "Tiramisu au café fort", prix: 5 },
        { name: "Glace à la vanille", prix: 9 },
        { name: "Petits moelleux chocolat et spéculoos", prix: 11 },
        { name: "Crème brûlée rapide", prix: 8 },
        { name: "Panna cotta vanille et citron", prix: 7.5 },
        { name: "Crêpes Suzette au Grand Marnier", prix: 9 },
        { name: "tarte aux Daims", prix: 4 },
      ],
      ListPlats: [
        {
          name: "Tajine",
          desc: "Tajine poulet aux olives et pomme de terre, aux saveurs du citron confit et des épices.",
          img: "tajin.jpeg",
          prix: 15,
        },
        {
          name: "Couscous",
          desc: "La viande ou le poulet est mijoté avec une variété de légumes dans un bouillon ample généreusement assaisonné de gingembre, de poivre et de curcuma",
          img: "couscous.png",
          prix: 18,
        },
        {
          name: "Poulet basquaise",
          desc: "Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          img: "Poulet_basquaise.jpeg",
          prix: 23,
        },
        {
          name: "Escargots au beurre persillé",
          desc: "Cuisinés comme le nom l’indique avec une crème au beurre et au persil, ils sont présentés dans leurs coquilles et on les déguste avec un petit pic.",
          img: "Escargots_au_beurre_persille.jpeg",
          prix: 13,
        },
        {
          name: "Mouclade charentaise",
          desc: "Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes",
          img: "Mouclade_charentaise.jpeg",
          prix: 16.5,
        },
        {
          name: "Tartiflette",
          desc: "il s’agit d’un gratin à base de pommes de terre, de lardons, d’oignons et de reblochon, un fromage savoyard.",
          img: "Tartiflette.jpeg",
          prix: 14,
        },
        {
          name: "Gratin dauphinois",
          desc: "composé de pommes de terre cuites en rondelles, crème fraîche, lait et noix de muscade",
          img: "Gratin_dauphinois.jpeg",
          prix: 15,
        },
        {
          name: "Bouillabaisse",
          desc: "ce plat est logiquement constitué de poissons variés, de coquillages, de tomates, d’aromates du Sud, de moutarde et de jaunes d’œuf. ",
          img: "Bouillabaisse.jpeg",
          prix: 15.5,
        },
        {
          name: "Blanquette de veau",
          desc: "se prépare avec de l’épaule ou de la poitrine de veau, de la crème, et un bouillon à base de carottes et d’oignons. ",
          img: "Blanquette_de_veau.jpeg",
          prix: 13,
        },
        {
          name: "Pot-au-feu",
          desc: "Il s’agit d’un plat de bœuf qui cuit longtemps et à feu très doux dans un bouillon de carottes, navets et poireaux",
          img: "Pot_au_feu.jpeg",
          prix: 13.5,
        },
        {
          name: "Coq-au-vin",
          desc: "Il s’agit d’une variante du célèbre bœuf bourguignon cuisinée à base de coq mariné dans du vin rouge, des lardons et des champignons.",
          img: "howa.jpeg",
          prix: 12.5,
        },
        {
          name: "Cuisses de grenouilles",
          desc: "elles sont généralement panées ou frites avec un peu d’oignon. La chair est délicate et le goût proche de celui de la volaille tout en étant moelleuse",
          img: "Cuisses_de_grenouilles.jpeg",
          prix: 17,
        },
        {
          name: "Cassoulet",
          desc: "ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes).",
          img: "Cassoulet.jpeg",
          prix: 12,
        },
        {
          name: "Choucroute",
          desc: " Il s’agit tout simplement de chou fermenté que l’on accompagne de pommes de terre, de lard et de diverses sortes de saucisses.",
          img: "Choucroute.jpeg",
          prix: 13.5,
        },
        {
          name: "Galettes bretonnes",
          desc: "Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée.",
          img: "Galettes_bretonnes.jpeg",
          prix: 14.5,
        },
        //-------------------------------------------------------------------------------------------->
      ],
    };
  },
  mounted() {
    this.getRestaurantsFromServer();
  },

  methods: {
    // method qui permet d'aller au detail du restaurant par son id
    goTodetail(id) {
      this.generateRandomCarte();

      this.idR = id;

      this.$router.push({
        name: "RestaurantDetail",
        params: { id: this.idR, obj: this.CarteFinal },
      });
    },
    // method qui permet de generer aleatoirement une carte et des menu pour un restaurant passé au details
    generateRandomCarte() {
      // 4 boisson
      let ListTaken = this.ListBoissons;
      let random = 0;

      for (let i = 0; i < 4; i++) {
        do {
          //generate random number
          random = this.getRandomInt(0, this.ListBoissons.length + 1);
        } while (ListTaken.includes(ListTaken[random]) == false);

        this.CarteFinal.carteBoissons.push(ListTaken[random]);

        this.removeItem(ListTaken, ListTaken[random]);
      }

      // 4 entré
      let ListTaken1 = this.ListEntre;
      let random1 = 0;

      for (let i = 0; i < 4; i++) {
        do {
          random1 = this.getRandomInt(0, this.ListEntre.length + 1);
        } while (ListTaken1.includes(ListTaken1[random1]) == false);

        this.CarteFinal.carteEntree.push(ListTaken1[random1]);
        if (i < 3) {
          this.CarteFinal.Menu.Entree.push(ListTaken1[random1]);
        }

        this.removeItem(ListTaken1, ListTaken1[random1]);
      }

      //4 dessert
      let ListTaken2 = this.ListDessert;
      let random2 = 0;

      for (let i = 0; i < 4; i++) {
        do {
          random2 = this.getRandomInt(0, this.ListDessert.length + 1);
        } while (ListTaken2.includes(ListTaken2[random2]) == false);

        this.CarteFinal.carteDessert.push(ListTaken2[random2]);
        if (i < 3) {
          this.CarteFinal.Menu.Dessert.push(ListTaken2[random2]);
        }
        this.removeItem(ListTaken2, ListTaken2[random2]);
      }

      //6 plats
      let ListTaken3 = this.ListPlats;
      let random3 = 0;

      for (let i = 0; i < 6; i++) {
        do {
          random3 = this.getRandomInt(0, this.ListPlats.length + 1);
        } while (ListTaken3.includes(ListTaken3[random3]) == false);

        this.CarteFinal.cartePlat.push(ListTaken3[random3]);
        if (i < 3) {
          this.CarteFinal.Menu.plat.push(ListTaken3[random3]);
        }
        this.removeItem(ListTaken3, ListTaken3[random3]);
      }

      //generate 3 menu name
      let Taken1 = this.Listname;

      let Mrandom1 = 0;

      for (let i = 0; i < 3; i++) {
        do {
          Mrandom1 = this.getRandomInt(0, this.Listname.length + 1);
        } while (Taken1.includes(Taken1[Mrandom1]) == false);

        this.CarteFinal.Menu.nom.push(Taken1[Mrandom1]);

        this.removeItem(Taken1, Taken1[Mrandom1]);

        this.CarteFinal.Menu.price.push(
          this.CarteFinal.Menu.Dessert[i].prix +
            this.CarteFinal.Menu.plat[i].prix +
            this.CarteFinal.Menu.Entree[i].prix
        );
      }
    },
    // method qui permet de supprimer un item dans un array par sa valeur
    removeItem(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },
    // method qui permet de cacher la side bar
    hidd: function () {
      var ddl = document.getElementById("suc");

      ddl.style.display = "none";
    },
    // method qui permet generer un int random
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    // method qui permet recevoir des données restaurant d'aprer le server
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
            this.NbrTotalpage = Math.round(
              this.NbrTotalRestaurant / this.pageSize
            );
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
    // debounce
    chercheResataurants: _.debounce(function () {
      this.getRestaurantsFromServer();
    }, 300),
    // method qui permet de supprimer un restaurant par son id
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
    // Page Suivant
    PageSuivant() {
      if (this.page == this.NbrTotalpage) return;
      this.page = this.page + 1;
      this.getRestaurantsFromServer();
    },
    // Page Precedent
    PagePrecedent() {
      if (this.page == 0) return;
      this.page = this.page - 1;
      this.getRestaurantsFromServer();
    },
    // method qui permet d'ajouter un restaurant par formulaire
    ajouterRestaurant(event) {
      event.preventDefault();

      let form = event.target;
      console.log(form);

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
    },
  },
};
</script>

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
  margin-top: 70px;

  text-align: center;

  font-family: cursive;
}
#res {
  color: rgb(51, 51, 51);
  font-size: 30px;
  font-family: "Gill Sans", sans-serif;
}
#suc {
  display: none;
}
#colA,
#colB {
  text-align: left;
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
#mylovelybuttons {
  margin-top: 20px;
}
#mylovelybuttons2 {
  margin-left: 30px;
}
#alrt {
  display: none;
}
</style>
