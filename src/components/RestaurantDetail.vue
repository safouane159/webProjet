<template>
<div>
<h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}}
</div>
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

</style>
