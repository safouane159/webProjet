<template>
  <div id="acceuil">
    <h1 id="bienvenue">Bienvenue</h1>
    <h1>Gérer Les restaurants</h1>

    <b-button variant="warning" @click="goToRes()"> commencer </b-button>
  </div>
</template>

<script>
export default {
  name: "Acceuil",
  props: {},
  methods: {
    goToRes() {
      this.$router.push("/ListRestaurants");
    },
  },
};
</script>

<style scoped>
#bienvenue {
  color: rgb(255, 213, 27);
  font-size: 120px;
}
#acceuil {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: aqua;

  color: rgb(198, 255, 255);
  padding: 20%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
</style>
