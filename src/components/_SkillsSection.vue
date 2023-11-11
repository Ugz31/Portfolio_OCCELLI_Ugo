<template>
  <section id="skills" class="section mt-5">
    <div class="container">
      <h1 class="title has-text-centered">Compétences</h1>

      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="card has-background-primary-light">
            <div data-tilt class="card-content is-flex is-flex-direction-column is-align-items-start is-flex-grow-1">
              <h2 class="subtitle" style="transform-style: preserve-3d, transform: perspective(1000px), transform: translateZ(20px)">Acquises</h2>
              <ul>
                <li v-for="skill in skills" :key="skill.name" class="mb-2 has-text-weight-semibold">
                  <i :class="skill.class" style="width: 20px; vertical-align: middle" />
                  - {{ skill.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column is-half">
          <div class="card has-background-info-light">
            <div class="card-content is-flex is-flex-direction-column is-align-items-start is-flex-grow-1">
              <h2 class="subtitle">En cours d'apprentissage</h2>
              <ul>
                <li v-for="learning in learnings" :key="learning.name" class="mb-2 has-text-weight-semibold">
                  <i :class="learning.class" style="width: 20px; vertical-align: middle" /> - {{ learning.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column is-full">
          <div class="card has-background-link-light">
            <div class="card-content">
              <h2 class="subtitle">Formations</h2>
              <p class="has-text-weight-semibold">Formation OpenClassRoom Developpeur Web.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { name: 'Html', class: 'devicon-html5-plain-wordmark' },
        { name: 'Css', class: 'devicon-css3-plain-wordmark' },
        { name: 'Js', class: 'devicon-javascript-plain colored' },
        { name: 'Node.js', class: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', class: 'devicon-express-original-wordmark' },
        { name: 'React.js', class: 'devicon-react-original' },
        { name: 'Vue.js', class: 'devicon-vuejs-plain-wordmark' },
        { name: 'MongoDB', class: 'devicon-mongodb-plain-wordmark' },
      ],
      learnings: [
        { name: 'Python', class: 'devicon-python-plain-wordmark' },
        { name: 'SQL', class: 'devicon-mysql-plain colored' },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
