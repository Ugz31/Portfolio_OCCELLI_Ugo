<template>
  <div id="app">
    <NavBar />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import NavBar from './components/_NavBar.vue';
import SkillsSection from './components/_SkillsSection.vue';
import ProjectsSection from './components/_ProjectsSection.vue';
import ContactSection from './components/_ContactSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>

<style>
* {
  font-family: 'Rubik', sans-serif;
}
</style>
