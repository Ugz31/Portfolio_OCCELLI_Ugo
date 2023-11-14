<template>
  <section id="projects" class="section">
    <div class="container">
      <h1 class="title">Projets</h1>
      <div class="columns is-multiline">
        <div v-for="project in projects" :key="project.title" class="column is-half">
          <div class="card" @click="toggleDescription(project.id)">
            <div class="card-content" v-if="!project.showDescription">
              <h2 class="title">{{ project.title }}</h2>
              <p>{{ project.languages }}</p>
            </div>
            <div class="card-content" v-else>
              <h2 class="title">Description :</h2>
              <p>{{ project.description }}</p>
              <br>
              <h2 class="title">Difficulté :</h2>
              <p>{{ project.difficulté }}</p>
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
          id: '0',
          title: 'KASA',
          languages: 'React.js + Sass',
          git: 'https://github.com/Ugz31/Projet-N-6-KASA-OpenClassRoom',
          description: 'Projet de création d\'un site copie d\'Airbnb en React.js / Sass',
          difficulté : 'Maitrise d\'un nouveau langage, compréhension des composants',
          showDescription: false,
        },
        {
          id: '1',
          title: 'Mon Vieux Grimoire',
          languages: 'Nodes.js + Express.js',
          git: 'https://github.com/Ugz31/P7_Backend_Mon_Vieux_Grimoire',
          description: 'Création de la partie API pour un site de notation de livre en Node.js / Express.js',
          difficulté: 'Compréhension de la logique back-end',
          showDescription: false,
        },
      ],
    };
  },
  methods: {
    toggleDescription(id) {
      const project = this.projects.find(p => p.id === id);
      if (project) {
        project.showDescription = !project.showDescription;
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez ici le style personnalisé pour la section des projets si nécessaire */
</style>
