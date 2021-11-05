<template>
  <div id="app">
    <!----------------------------  le menu ( side bar ) ------------------------------>
    <b-row id="row"
      ><b-col id="first" sm="2">
        <div id="menu">
          <Menu /></div
      ></b-col>
      <b-col id="second" sm="10">
        <!----------------------------  router view ( reste des views ) ------------------------------>
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
#first {
  background-color: rgb(252, 243, 218);
  height: 1300px;
  text-align: center;
}
#row {
  height: 120%;
  margin-right: 10px;
}

#body {
  background-image: url("./assets/BG.png");
  background-repeat: no-repeat;

  background-size: cover;
}
</style>
