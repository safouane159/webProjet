<template>
  <div >
    
     <h1>la carte</h1>
     <hr data-content="AND" class="hr-text">
    {{wsl}}
     <hr data-content="AND" class="hr-text">
     <hr data-content="AND" class="hr-text">
    <div></div>
  </div>

  <!-- <h1>detail de restaurant : {{id}}</h1>
{{restaurant.name}} -->
</template>

<script>
export default {
  name: "Carte",
  props: ['wsl'],
  data: function () {
    return {
     

      restaurant: null,
    };
  },

  methods: {



  },
 
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
