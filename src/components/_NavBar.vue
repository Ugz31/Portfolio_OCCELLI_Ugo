<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item title-brand"> Portfolio Ugo OCCELLI </a>
        <!-- Ajout du v-bind:class et @click -->
        <div class="navbar-burger burger" :class="{ 'is-active': isNavbarActive }" @click="toggleNavbar" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- Ajout du v-bind:class pour le menu -->
      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
        <div class="navbar-end">
          <a class="navbar-item" href="#skills">Compétences</a>
          <a class="navbar-item" href="#projects">Projets</a>
          <a class="navbar-item" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isNavbarActive: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
    },
  },
};
</script>

<style scoped>
body {
  padding-top: 52px;
}
</style>
