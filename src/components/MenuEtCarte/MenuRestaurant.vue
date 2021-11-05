<template>
  <div>
    <h1 class="titlreCarte2">Nos Menu</h1>
    <hr data-content="AND" class="hr-text" />

    <!--------------- Menu 1-------------->
    <div>
      <b-row>
        <b-col md="10"
          ><h1 class="menutitle">{{ CarteEtMenu.Menu.nom[0] }}</h1></b-col
        ><b-col
          ><div>
            <md-button
              class="md-icon-button petit btn3"
              v-on:click="
                addP(CarteEtMenu.Menu.price[0], CarteEtMenu.Menu.nom[0])
              "
              ><md-icon>add</md-icon></md-button
            >
          </div></b-col
        ></b-row
      >

      <b-row class="sr1">
        <b-col md="4" class="sr1">
          <b-card-img
            :src="require('@/assets/' + CarteEtMenu.Menu.plat[0].img)"
            class="aji"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <br />
          <span class="lis"> Entré : </span>
          {{ CarteEtMenu.Menu.Entree[0].name }} <br /><br />
          <span class="lis">Plat : </span> {{ CarteEtMenu.Menu.plat[0].name }}
          <br /><br />
          <span class="lis">Dessert : </span>
          {{ CarteEtMenu.Menu.Dessert[0].name }}<br /><br />

          <span class="lis1"> {{ CarteEtMenu.Menu.price[0] }} €</span>
        </b-col>
      </b-row>
    </div>
    <div>
      <hr data-content="AND" class="hr-text" />
      <!--------------- Menu 2 -------------->
      <b-row>
        <b-col md="10"
          ><h1 class="menutitle">{{ CarteEtMenu.Menu.nom[1] }}</h1></b-col
        ><b-col
          ><div>
            <md-button
              class="md-icon-button petit btn3"
              v-on:click="
                addP(CarteEtMenu.Menu.price[1], CarteEtMenu.Menu.nom[1])
              "
              ><md-icon>add</md-icon></md-button
            >
          </div></b-col
        ></b-row
      >

      <b-row class="sr1">
        <b-col md="4" class="sr">
          <b-card-img
            :src="require('@/assets/' + CarteEtMenu.Menu.plat[1].img)"
            class="aji"
          ></b-card-img>
        </b-col>
        <b-col md="6" class="infol">
          <br />
          <span class="lis"> Entré : </span>
          {{ CarteEtMenu.Menu.Entree[1].name }} <br /><br />
          <span class="lis">Plat : </span> {{ CarteEtMenu.Menu.plat[1].name }}
          <br /><br />
          <span class="lis">Dessert : </span>
          {{ CarteEtMenu.Menu.Dessert[1].name }}<br /><br />

          <span class="lis1"> {{ CarteEtMenu.Menu.price[1] }} €</span>
        </b-col>
      </b-row>
    </div>
    <hr data-content="AND" class="hr-text" />
    <!--------------- Menu 3 -------------->
    <div>
      <b-row>
        <b-col md="10"
          ><h1 class="menutitle">{{ CarteEtMenu.Menu.nom[2] }}</h1></b-col
        ><b-col
          ><div>
            <md-button
              class="md-icon-button petit btn3"
              v-on:click="
                addP(CarteEtMenu.Menu.price[2], CarteEtMenu.Menu.nom[2])
              "
              ><md-icon>add</md-icon></md-button
            >
          </div></b-col
        ></b-row
      >
      {{ CarteEtMenu.cartePlat[0].img }} + {{ CarteEtMenu.cartePlat[1].img }} +
      {{ CarteEtMenu.cartePlat[2].img }} + {{ CarteEtMenu.cartePlat[3].img }} +
      {{ CarteEtMenu.cartePlat[4].img }} +{{ CarteEtMenu.cartePlat[5].img }} +
      <b-row class="sr1">
        <b-col md="4" class="sr">
          <b-card-img
            :src="require('@/assets/' + CarteEtMenu.Menu.plat[2].img)"
            lass="aji"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <br />
          <span class="lis"> Entré : </span>
          {{ CarteEtMenu.Menu.Entree[2].name }} <br /><br />
          <span class="lis">Plat : </span> {{ CarteEtMenu.Menu.plat[2].name }}
          <br /><br />
          <span class="lis">Dessert : </span>
          {{ CarteEtMenu.Menu.Dessert[2].name }}<br /><br />

          <span class="lis1"> {{ CarteEtMenu.Menu.price[2] }} €</span>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuRestaurant",
  props: ["CarteEtMenu"],

  data: function () {
    return {
      dataToSens: { name: "", price: 0 },
      myid: 0,
    };
  },
  mounted() {},
  methods: {
    //Fonction emit qui envoi au component parent les données
    addP: function (Price, name) {
      var ddl4 = document.getElementById("t3");
      var ddl3 = document.getElementById("carteI");
      ddl3.style.marginLeft = "0px";
      ddl3.style.width = "1480px";
      ddl4.style.display = "block";

      this.dataToSens.id = this.myid;
      this.dataToSens.name = name;
      this.dataToSens.price = Price;

      this.$emit("addPrice", this.dataToSens);
      this.myid = this.myid + 1;
    },
  },
};
</script>

<style scoped>
.petit {
  width: 13;
  background-color: green;
  height: 25px;
  color: white;
}

.btn3 {
  margin: 0px;
  margin-top: 10px;
}
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
  font-family: cursive;
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
