<template>
<div id="carte">
    <b-row id="row">
      <b-col cols="8">
         <div id="pic" >
           <div id="title" >
           <h2 id="small">  Restaurant </h2><h1 id="big">{{restaurant.name}} </h1> 
           </div>
         </div>
         <div id="info">

<p id="desc">   <span style="color: red"> {{restaurant.name}} </span>  is the ideal place to enjoy a meal with friends or just a drink with a panoramic view over the valley to the sea : 
The menu is original, featuring a choice of dishes for sharing, daily specials, home-made pasta and foie gras as well as a range of salads, quiches and deserts. It’s the ideal place to take a break, enjoy a reasonably priced meal, or meet friends for a drink.</p>

<h2 id="small2"  >Plus d'information</h2>
 <md-list class="md-triple-line">
       <md-list-item>
       
        <div class="md-list-item-text">
          Cuisine<span id="myspan">{{restaurant.cuisine}}</span>
          
        </div>

      </md-list-item>
   <md-divider class="md-inset"></md-divider>
      <md-list-item>
       
        <div class="md-list-item-text">
          Ville: <span id="myspan"> {{restaurant.borough}} </span>
          
        </div>

      </md-list-item>
      <md-divider class="md-inset"></md-divider>

      <md-list-item>
       
        <div class="md-list-item-text">
       <md-icon id="myicon" >star star star</md-icon>
    
          
        </div>

      </md-list-item>
    </md-list>
         </div>
  
      </b-col>
      <b-col >
     </b-col>
  </b-row>

</div>




  <!-- <h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}} --> 


</template>

<script>
export default {
  name: 'RestaurantDetail',
  props: {
    
  },
  data: function(){
return{
  restaurant:null
}
    
  },

   methods:{
   
  },
  computed:{
    id(){
      return this.$route.params.id    }
  },
  mounted(){
let url = "http://localhost:8080/api/restaurants/"+this.id;
     fetch(url).then(reponse=> {
       return reponse.json(); }).then(data => {
                    
                        this.restaurant = data.restaurant;
                        
                    })
                    
                },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carte {
  background-color: aliceblue;
    height: 90%;
    margin-top: 100px;
     margin-left: 200px;
 
}

#info {
  padding: 20px;
    height: 60%;
}
#myicon {
  color : rgb(255, 208, 0);
}
#row {
  
    height: 100%;
}
#title {
  padding-top:40px ;
  
  
  background-color: rgba(44, 44, 44, 0.8);

  position:absolute;
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
 color:  rgb(128, 83, 0);
  font-family: Georgia, serif;
  font-size: 20px;
}
#desc {
 
  font-family: Lucida Sans;
  font-size: 20px;
}
#myspan {
 
 text-align: center;
}

#pic {
  width: 760px;
      
  position: relative; 
  background-image: url('../assets/R.jpg');
background-repeat:no-repeat;
   background-size:cover;
   
    height: 40%;
}
</style>
