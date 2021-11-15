<template>
  <div class="">
    <!-- <div id="nav"> -->
    <div class="container-fluid">
      <navHeader />
      <!-- <p>
      <font-awesome-icon :icon="['fas', 'sun']" />
      <font-awesome-icon icon="cloud-sun" />
      <font-awesome-icon icon="cloud" />
      <font-awesome-icon icon="cloud-rain" />
    </p> -->
    </div>
    <router-view />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <Footer />
  </div>
</template>
<script>
import navHeader from "@/components/navHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    navHeader,
    Footer,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/all.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
