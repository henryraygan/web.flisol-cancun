<template>
  <div class="home">
    <banner></banner>
    <join-us></join-us>
    <about-section></about-section>
    <program></program>
    <footer class="main-footer">
      <div class="fl-container">
        Hecho con &#9829; en Cancún
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue';
import AboutSection from '@/components/AboutSection.vue';
import JoinUs from '@/components/JoinUs.vue';
import Program from '@/components/Program.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Banner,
    AboutSection,
    JoinUs,
    Program
  }
}
</script>
