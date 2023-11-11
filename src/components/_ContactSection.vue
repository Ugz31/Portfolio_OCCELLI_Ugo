<template>
  <section id="contact" class="section">
    <div class="container">
      <h1 class="title">Contactez-moi</h1>
      <p>Email: occelli.ugo@gmail.com</p>
      <p>Discord: ugo9999 (id discord)</p>
      <p><a :href="gitLink">GitHub: Ugz31</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      gitLink: 'https://github.com/Ugz31',
    };
  },
};
</script>

<style scoped>
/* Ajoutez ici le style personnalisé pour la section contact si nécessaire */
</style>
