<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><img src="@/assets/images/logo.png" alt="logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Product</b-nav-item>
          <b-nav-item href="#">Faq</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="slider" :style="`background-image: url(${require('@/assets/images/bg.png')})`">
      <h4>Food app</h4>
      <h1>Why stay hungry when you can order form Bella Onojie</h1>
      <h4>Download the bella onoje’s food app now on</h4>
      <button>Playstore</button>
      <button>App store</button>
    </div>
    <img class="phone-img" src="@/assets/images/cellphones.png" alt="">
    <div class="container">
      <h1>How the app works</h1>
      <div class="cards">
        <div class="row card-api" v-for="(item, i) in this.api.items" :key="i">
          <div class="col-sm-12 col-md-6">
            <h6>{{ item.subtitle }}</h6>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div class="col-sm-12 col-md-6 img-card">
            <img :src="item.image" :alt="item.subtitle">
          </div>
        </div>
      </div>
    </div>
    <div class="download" :style="`background-image: url(${require('@/assets/images/bg-download.png')})`">
      <h1>Download the app now.</h1>
      <h4>Available on your favorite store. Start your premium experience now</h4>
      <button>Playstore</button>
      <button>App store</button>
    </div>
    <footer>
      <div class="row container">
        <div class="col-4 logo">
          <img src="@/assets/images/logo.png" alt="logo">
        </div>
        <div class="col-4 social-medias">
          <img src="@/assets/images/facebook.svg" alt="twitter">
          <img src="@/assets/images/twitter.svg" alt="facebook">
          <img src="@/assets/images/instagram.svg" alt="instagram">
        </div>
        <div class="col-4 copywright">
          Copywright 2020 Bella Onojie.com
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data: function () {
    return {};
  },
  beforeMount: async function () {
    this.loadApi();
    console.log(this.api);
  },
  computed: {
    ...mapGetters({
      api: "api/getApi"
    }),
  },
  methods: {
    ...mapActions({
      loadApi: "api/loadApi"
    }),
  },
};
</script>

<style scoped>
</style>
