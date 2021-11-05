<template>
  <div id="carteI">
    <!--    -->

    <b-row>
      <md-button v-on:click="goTodetaill()" class="md-accent"
        >revenir au detais</md-button
      >
      <!--  compenent child "CarteRestaurant"  -->
      <b-col cols="5" id="t1">
        <CarteRestaurant :wsl="maCarte" v-on:addPrice="acumulation($event)" />
      </b-col>

      <b-col cols="5" id="t2">
        <!--  compenent child "MenuRestaurant"  -->
        <MenuRestaurant
          :CarteEtMenu="maCarte"
          v-on:addPrice="acumulation($event)"
        />
      </b-col>
      <!--  compenent child "facture"  -->
      <b-col cols="2" id="t3">
        <h3 id="rec">Récapitulatif de la commande:</h3>

        <ul id="array-rendering">
          <li v-for="item in ListNames" v-bind:key="item.id">
            <b-button
              variant="outline-danger "
              class="s"
              v-on:click="deletefromlist(item)"
              >X</b-button
            >
            x1 {{ item.name }} - {{ item.price }} euro
          </li>
        </ul>

        <div id="cmd">
          <p id="thehidden2">Prix Total: {{ this.myprice }} euro</p>
          <md-button class="md-raised md-accent" disabled id="btn8"
            >passer au paiment </md-button
          ><md-button class="md-primary" v-on:click="hide()">Hide</md-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CarteRestaurant from "./MenuEtCarte/CarteRestaurant.vue";
import MenuRestaurant from "./MenuEtCarte/MenuRestaurant.vue";

export default {
  name: "CarteMenuView",
  components: {
    CarteRestaurant,
    MenuRestaurant,
  },
  props: {},

  data: function () {
    return {
      ListNames: [],
      ListPrice: [],
      myprice: 0,
      test: {},

      some: 0,
      maCarte: {
        carteEntree: [],
        carteDessert: [],
        carteBoissons: [],
        cartePlat: [],
        Menu: [],
      },
      id: 0,
    };
  },

  methods: {
    deletefromlist(item) {
      this.removeItem(this.ListNames, item);
      this.myprice = this.myprice - item.price;
    },
    removeItem(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },
    goTodetaill() {
      this.$router.push({
        name: "RestaurantDetail",
        params: { id: this.$route.params.id, obj: this.$route.params.myobj },
      });
    },
    // cacher le compenent facture
    hide() {
      var ddl4 = document.getElementById("t3");
      var ddl3 = document.getElementById("carteI");
      ddl3.style.marginLeft = "200px";
      ddl3.style.width = "1080px";
      ddl4.style.display = "none";
    },
    // la fonction qui recoi les données des components child et fait le calcul
    acumulation: function (p) {
      this.ListNames.push({ name: p.name, price: p.price });

      this.myprice = this.myprice + p.price;
    },
  },
  mounted() {
    // recevoire les données et les fetch dans des variable laucaux
    this.maCarte.carteEntree = this.$route.params.myobj.carteEntree;
    this.maCarte.carteDessert = this.$route.params.myobj.carteBoissons;
    this.maCarte.carteBoissons = this.$route.params.myobj.carteDessert;
    this.maCarte.cartePlat = this.$route.params.myobj.cartePlat;
    this.maCarte.Menu = this.$route.params.myobj.Menu;

    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
#carteI {
  background-color: aliceblue;
  height: 100%;
  margin-top: 10px;
  width: 1080px;
  margin-left: 200px;
}
#rec {
  margin-top: 10px;
  font-size: 25px;
  font-family: Georgia, serif;
}
#btn8 {
  background-color: rgb(41, 146, 0);
  margin-left: 100px;
}
#t1 {
  width: 640px;
}
#t2 {
  width: 440px;
}
#t3 {
  border: solid;

  /* width | style */
  border: 2px dotted;
  height: 800px;
  display: none;
  width: 400px;
}
.s {
  height: 20px;
  width: 20px;
  padding: 0px;
  margin: 0;
}
#cmd {
  position: absolute;
  bottom: 500px;
  width: 100%;
}

#thehidden {
  height: 70px;
}
#thehidden2 {
  color: rgb(0, 0, 0);

  font-family: Lucida Sans;
  font-size: 20px;
}
</style>
