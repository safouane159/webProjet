
  <template>
  <!--------------- Menu adroit de la main view -------------->
  <div id="mysidebar">
    <!----------------------------  Logo ------------------------------>
    <h4><b-img :src="require('../assets/DG.png')" fluid thumbnail></b-img></h4>
    <!----------------------------  description ------------------------------>
    <div class="p-3">
      <p>
        Ici vous trouvez votre meilleure restaurants, il suffit juste un petit
        recherche.
      </p>
      <nav>
        <b-nav vertical>
          <hr   />
          <b-nav-item>
            <router-link to="/"> <div class="menui">Acceuil</div> </router-link>
          </b-nav-item>
          <hr />
          <b-nav-item>
            <router-link to="/ListRestaurants">
              <div class="menui">List des restaurants</div>
            </router-link>
          </b-nav-item>
          <hr  />
        </b-nav>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menui {
  color: rgb(247, 165, 73);
  font-family: Georgia, serif;
  font-size: 20px;
}
r.hr-text {
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
</style>