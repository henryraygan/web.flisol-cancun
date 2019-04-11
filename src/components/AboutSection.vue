<template>
  <section class="about-section" id="sobre-flisol">
    <div class="fl-container">
      <h2 class="title-section" v-scroll-reveal="{ delay: 350 }">Sobre el evento</h2>
      <img
        v-scroll-reveal="{ delay: 450 }"
        src="../assets/images/FLISoL-2015.png"
        alt="FLISOL"
        class="logo-info"
      >

      <section v-scroll-reveal="{ delay: 650 }">
        <p>
          El festival latinoamericano de instalación de software libre “FLISOL” es el evento de difusión orientado a la
          filosofía del software libre más grande de Latinoamérica. Está dirigido a todo tipo de personas estudiantes,
          profesores, ingenieros, entusiastas y público en general.
        </p>
        <p>
          El evento se realiza cada año desde 2005, adoptando el 4to sábado de abril de cada año para su festejo. El
          principal objetivo es promover el uso del software libre ilustrando a la audiencia su filosofía, alcance, desarrollo e
          impacto en diferentes aspectos de la sociedad.
        </p>
        <p>
          La entrada al evento es
          <strong>totalmente gratuita</strong> para todo el público. La organización del evento es llevada a cabo
          por medio de un grupo de entusiastas preocupados por promover el uso del software y de sus cuatro libertades
          basadas en la ética y el desarrollo de la sociedad para el conocimiento.
        </p>
        <p>
          Puedes participar en el evento de distintas maneras, difundiendo, presentando una ponencia, como staff, como
          patrocinador o presentando proyectos que sigan el movimiento.
        </p>
        <p>A continuación, podrás elegir el método con el cual podrás apoyar a la organización del evento.</p>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style lang="scss">
.logo-info {
  width: 30%;
  margin: 0 auto;
}
.about-section {
  // background: var(--primary-color);
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  line-height: 1.5;
  padding: 2rem 0;
  img {
    margin: 3rem auto;
    text-align: center;
    display: flex;
  }
  p {
    margin-bottom: 1rem;
  }
}
</style>
