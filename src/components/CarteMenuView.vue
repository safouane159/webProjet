<template>
  <div id="carte">
    <b-row id="row">
      
      <b-col cols="6" id="cool8">
        
       <CarteRestaurant :wsl="info" />
      </b-col>
      <b-col cols="6" id="maapC" >
         <MenuRestaurant />
      </b-col>
    </b-row>
    
  </div>

  <!-- <h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}} -->
</template>

<script>
import CarteRestaurant from './MenuEtCarte/CarteRestaurant.vue'
import MenuRestaurant from './MenuEtCarte/MenuRestaurant.vue'

export default {
  name: "CarteMenuView",
  components: {
    CarteRestaurant,
    MenuRestaurant
  },
  props: {

  },
  data: function () {
    return {
     
     info :'le3Ba'

    };
  },

  methods: {



  },
  computed: {
    
  },
  mounted() {
   
    /*this.maCarteFinal.carteEntree = this.$route.params.myobj.carteEntree ;
this.maCarteFinal.carteDessert = this.$route.params.myobj.carteBoissons ;
this.maCarteFinal.carteBoissons = this.$route.params.myobj.carteDessert ;
this.maCarteFinal.cartePlat = this.$route.params.myobj.cartePlat ;
this.maCarteFinal.Menu = this.$route.params.myobj.Menu ;*/
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carte {
  background-color: aliceblue;
  height: 90%;
  margin-top: 100px;
  margin-left: 150px;
  margin-right: 100px;
}
</style>
