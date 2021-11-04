<template>
  <div id="carte">
    <b-row id="row">
      
      <b-col cols="6" id="cool8">
        
       <CarteRestaurant :wsl="maCarte" />
      </b-col>
      <b-col cols="6" id="maapC" >
         <MenuRestaurant :CarteEtMenu="maCarte" />
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
     
    
     
maCarte:{ carteEntree:[],carteDessert:[],carteBoissons:[],cartePlat:[],Menu:[] },
id:0
    };
  },

  methods: {



  },
  computed: {
    
  },
  mounted() {
    this.maCarte.carteEntree = this.$route.params.myobj.carteEntree ;
this.maCarte.carteDessert = this.$route.params.myobj.carteBoissons ;
this.maCarte.carteBoissons = this.$route.params.myobj.carteDessert ;
this.maCarte.cartePlat = this.$route.params.myobj.cartePlat ;
this.maCarte.Menu = this.$route.params.myobj.Menu ;

   this.id = this.$route.params.id;
    
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
