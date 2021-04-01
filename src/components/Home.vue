<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#"><img src="@/assets/images/logo.png" alt="logo" class="logo"></b-navbar-brand>

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
      <h1 class="mb-3">Why stay hungry when you can order form Bella Onojie</h1>
      <h5 class="mb-4">Download the bella onoje’s food app now on</h5>
      <div class="row">
        <div class="col-12 col-md-6 btn-1-slider mb-3">
          <button class="btn-1">Playstore</button>
        </div>
        <div class="col-12 col-md-6 btn-2-slider">
          <button class="btn-2">App store</button>
        </div>
      </div>
    </div>
    <img class="phone-img" src="@/assets/images/cellphones.png" alt="">
    <div class="container">
      <h1 class="my-5">How the app works</h1>
      <div class="cards">
        <div class="row card-api mt-5" v-for="(item, i) in this.api.items" :key="i">
          <div class="col-sm-12 col-md-6 text-card">
            <h5 class="mb-3">{{ item.subtitle }}</h5>
            <h2 class="mb-3">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div class="col-sm-12 col-md-6 img-card">
            <img :src="item.image" :alt="item.subtitle">
          </div>
        </div>
      </div>
    </div>
    <div class="download" :style="`background-image: url(${require('@/assets/images/bg-download.png')})`">
      <h1 class="mb-3">Download the app now.</h1>
      <template v-if="windowWidth >= 576">
        <h4 class="mb-5">Available on your favorite store. Start your premium experience now</h4>
        <button class="btn-1 mr-4">Playstore</button>
        <button class="btn-2">App store</button>
      </template>
      <template v-else>
        <h4 class="mb-5">Most calendars are designed for teams. </h4>
        <button class="btn-1 mr-4">Buy now</button>
        <button class="btn-2">Try for free</button>
      </template>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4 logo-footer">
            <img src="@/assets/images/logo.png" alt="logo">
          </div>
          <div class="col-md-4 col-12 social-medias">
            <a href="https://twitter.com" target="_blank">
              <img src="@/assets/images/twitter.svg" alt="twitter">
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img class="mx-3" src="@/assets/images/facebook.svg" alt="facebook">
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="@/assets/images/instagram.svg" alt="instagram">
            </a>
          </div>
          <div class="col-md-4 col-12 copywright">
            <small>
              Copywright 2020 Bella Onojie.com
            </small>
          </div>
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
    return {
      windowWidth: ''
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth
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
