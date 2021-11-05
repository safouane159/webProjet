<template>
  <div id="carte">
    <b-row id="row">
      <b-col cols="8" id="cool8">
        <div id="pic">
          <div id="title">
            <b-row>
              <b-col>
                <h2 id="small">Restaurant</h2>
                <h1 id="big">{{ restaurant.name }}</h1>
              </b-col>
              <b-col id="btn3">
                <!--  button pour aller a la carte et menu -->
                <md-button class="md-accent" id="btn4" v-on:click="gotTOoMenu()"
                  ><md-icon>restaurant</md-icon>Carte/Menu</md-button
                >
              </b-col>
            </b-row>
          </div>
        </div>
        <!--  description du restaurant  -->
        <div id="info">
          <p id="desc">
            <span style="color: red"> {{ restaurant.name }} </span> is the ideal
            place to enjoy a meal with friends or just a drink with a panoramic
            view over the valley to the sea : The menu is original, featuring a
            choice of dishes for sharing, daily specials, home-made pasta and
            foie gras as well as a range of salads, quiches and deserts. It’s
            the ideal place to take a break, enjoy a reasonably priced meal, or
            meet friends for a drink.
          </p>

          <h2 id="small2">Plus d'information</h2>
          <md-list class="md-triple-line">
            <md-list-item>
              <div class="md-list-item-text">
                Cuisine<span id="myspan">{{ restaurant.cuisine }}</span>
              </div>
            </md-list-item>
            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div class="md-list-item-text">
                Address:
                <span id="myspan">
                  {{ restaurant.address.building }}
                  {{ restaurant.address.street }}, &nbsp;{{
                    restaurant.borough
                  }}
                  &nbsp;{{ restaurant.address.zipcode }}
                </span>
              </div>
            </md-list-item>
            <md-divider class="md-inset"></md-divider>

            <md-list-item>
              <div class="md-list-item-text">
                <md-icon id="myicon">star star star </md-icon>
              </div>
            </md-list-item>
          </md-list>
        </div>
      </b-col>
      <!--------  compenent map  -------------->
      <b-col id="maapC">
        <div id="maap">
          <GmapMap
            :center="{
              lat: restaurant.address.coord[1],
              lng: restaurant.address.coord[0],
            }"
            :zoom="12"
            style="width: 100%; height: 600px"
          >
            <GmapMarker
              :position="{
                lat: restaurant.address.coord[1],
                lng: restaurant.address.coord[0],
              }"
            />
          </GmapMap>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RestaurantDetail",
  props: {},
  data: function () {
    return {
      maCarteFinal: {
        carteEntree: [],
        carteDessert: [],
        carteBoissons: [],
        cartePlat: [],
        Menu: [],
      },
      idR: 0,
      restaurant: null,
    };
  },

  methods: {
    // method qui permet d'aller au menu du restaurant
    gotTOoMenu() {
      this.$router.push({
        name: "CarteMenuView",
        params: { id: this.idR, myobj: this.maCarteFinal },
      });
    },
  },

  mounted() {
    this.idR = this.$route.params.id;
    this.$route.params.obj.Menu.Entree;
    this.maCarteFinal.carteEntree = this.$route.params.obj.carteEntree;
    this.maCarteFinal.carteDessert = this.$route.params.obj.carteBoissons;
    this.maCarteFinal.carteBoissons = this.$route.params.obj.carteDessert;
    this.maCarteFinal.cartePlat = this.$route.params.obj.cartePlat;
    this.maCarteFinal.Menu = this.$route.params.obj.Menu;

    let url = "http://localhost:8080/api/restaurants/" + this.$route.params.id;
    fetch(url)
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        this.restaurant = data.restaurant;
      });
  },
};
</script>

<style scoped>
#carte {
  background-color: aliceblue;
  height: 90%;
  margin-top: 100px;
  margin-left: 150px;
  margin-right: 100px;
}

#info {
  padding: 20px;
  padding-right: 10px;
  height: 60%;
}
#myicon {
  color: rgb(255, 208, 0);
}
#myicon2 {
  color: rgb(119, 119, 119);
}

#row {
  height: 100%;
}
#title {
  padding-top: 40px;

  background-color: rgba(44, 44, 44, 0.8);

  position: absolute;
  bottom: 0;
  padding-left: 30px;
  height: 150px;
  width: 100%;
}
#big {
  color: rgb(255, 230, 184);
  font-family: cursive;
  font-size: 40px;
}
#small {
  color: rgb(255, 255, 255);
  font-family: Georgia, serif;
  font-size: 20px;
}
#small2 {
  color: rgb(128, 83, 0);
  font-family: Georgia, serif;
  font-size: 20px;
}
#desc {
  font-family: Lucida Sans;
  font-size: 20px;
}
#myspan {
  text-align: center;
  color: rgb(228, 166, 85);
}
#maap {
  padding: 0;
  padding-right: 0;
  padding-left: 0;
}
#maapC {
  padding: 0;
  width: 360px;
  padding-right: 0;
  padding-left: 0;
}
#cool8 {
  padding-right: 0;
}
#btn3 {
  text-align: right;

  padding-top: 60px;
}
#btn4 {
  font-family: Georgia, serif;
  color: rgb(255, 153, 0);
  font-size: 20px;
}
#pic {
  width: 802px;

  position: relative;
  background-image: url("../assets/R.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  height: 40%;
}
</style>
