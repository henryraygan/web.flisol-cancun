<template>
  <div class="home">
    <banner></banner>
    <about-section></about-section>
    <join-us></join-us>

    <program></program>

    <!-- <program></program> -->
    <!--team></team -->
    <!-- <sponsors></sponsors> -->
    <contact-us></contact-us>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import AboutSection from '@/components/AboutSection.vue';
import JoinUs from '@/components/JoinUs.vue';
import Program from '@/components/Program.vue';
import ContactUs from '@/components/ContactUs.vue';
import Team from '@/components/Team.vue';
import Sponsors from '@/components/Sponsors';

export default {
  name: 'home',
  components: {
    Banner,
    Navbar,
    AboutSection,
    JoinUs,
    Program,
    ContactUs,
    Team,
    Sponsors
  }
}
</script>
