
  <template>
  <div id="mysidebar">
  
      
          <h4 ><b-img :src="require('../assets/DG.png')" fluid thumbnail></b-img></h4>

        <div class="p-3">
          
          <p>
          Ici vous trouvez votre meilleure restaurants, il suffit juste un petit recherche.
          </p>
          <nav >
            <b-nav vertical>
           <b-nav-item  > <router-link to="/">   Acceuil </router-link> </b-nav-item>
                <b-nav-item > <router-link to="/ListRestaurants">  List des restaurants </router-link>  </b-nav-item> 
              
            </b-nav>
          </nav>
          
        </div>
        
  </div>
   
    
</template>

<script>
export default {
  name: 'Menu',
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>