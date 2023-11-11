<template>
  <section id="projects" class="section">
    <div class="container">
      <h1 class="title">Projets</h1>
      <div class="columns is-multiline">
        <div v-for="project in projects" :key="project.title" class="column is-half">
          <div class="card">
            <div class="card-content">
              <h2 class="title">{{ project.title }}</h2>
              <p>{{ project.languages }}</p>
            </div>
            <footer class="card-footer">
              <a :href="project.git" class="card-footer-item" target="_blank">Voir sur GitHub</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'KASA',
          languages: 'React.js + Sass',
          git: 'https://github.com/Ugz31/Projet-N-6-KASA-OpenClassRoom',
        },
        {
          title: 'Mon Vieux Grimoire',
          languages: 'Nodes.js + Express.js',
          git: 'https://github.com/Ugz31/P7_Backend_Mon_Vieux_Grimoire',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez ici le style personnalisé pour la section des projets si nécessaire */
</style>
