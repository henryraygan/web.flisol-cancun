<template>
  <div class="home">
    <div class="fl-container code-of-conduct-container">
      <br>
      <br>
      <br>
      <br>
      <h1>Código de conducta</h1>
      <h2>Festival Latinoamericano de Instalación de Software Libre Cancún 2019</h2>
      <br>
      <br>
      <br>
      <h3>Introducción</h3>
      <p>El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre| más grande de Latinoamérica y está dirigido a todo tipo de público: estudiantes, académicos, empresarios, trabajadores, funcionarios públicos, entusiastas de la tecnología y personas en general, aunque no posean conocimiento informático. Se realiza desde el año 2005 y en 2008 se adoptó su realización el 4to sábado de abril de cada año.</p>
      <p>Es un evento gratuito abierto al público, todos pueden asistir, el principal objetivo es promover el uso del software libre y de código abierto, dando a conocer su filosofía, alcances, avances y desarrollo.</p>
      <p>Este evento es organizado por diversas comunidades locales de tecnología y educación, en el, se plantean ponencias, talleres, charlas informales, cursos, proyectos personales, intercambio de ideas, desarrollo de software y manipulación de hardware.</p>

      <h3>Cumplimiento de leyes, normas y regulaciones</h3>
      <p>Los organizadores, así como el evento mismo, están regido bajo la ley. El cumplimiento de las normas y regulaciones establecidas en la ciudad de Cancún y el estado de Quintana Roo no puede prestarse a compromisos. Ninguno de nuestros procesos de selección, de personal y/o sede fueron ilegales o informales, se llevó a cabo un protocolo de selección equitativo y limpio. Así como todas las acciones llevadas a cabo el día del evento se espera sean de orden pacíficas y sin violencia.</p>
      <h3>Sobre intereses personales.</h3>
      <p>
        El FLISoL está organizado por un conjunto de comunidades, personas apasionadas por la tecnología y público en general, no existe una cabeza líder del evento, por lo tanto, los acuerdos son llevados a cabo por una toma de decisiones en conjunto.
        <strong>No se permiten intereses económicos ni personales.</strong>
        No se genera ningún tipo de ingreso económico con la realización del evento y todos los recursos obtenidos por patrocinadores son honestamente orientados a la organización del evento.
      </p>
      <h3>Acerca del evento</h3>
      <p>El Festival Latinoamericano de Instalación de Software Libre (FLISoL) establece que el evento es totalmente gratuito, orientado a todo el público en general, sin discriminar ni resaltar origen étnico, estatus social, género, expresiones de género, orientación sexual, edad, capacidad motriz, raza, religión o cualquier otro concepto clasificatorio que pueda entrar en la categoría de discriminación.</p>
      <p>
        FLISoL es un evento hecho por la comunidad, hombres y mujeres son parte del comité organizador
        <strong>y está estrictamente prohibida la discriminación de cualquier tipo</strong>, durante la planificación realización y culminación del evento.
      </p>
      <h3>Actitudes y comportamientos esperados durante el evento.</h3>
      <p>Los organizadores del evento estamos enfocados en que los valores establecidos en esta pauta sean respetados totalmente durante el evento y posterior a él.</p>
      <p>El comité organizador espera que los participantes que acudan muestren actitudes de profesionalismo, honestidad, calidez humana, tolerancia y respeto.</p>
      <p>Las actitudes que no serán debidamente toleradas en la organización del evento son:</p>
      <p>Ataques verbales, violencia de género, lenguaje obsceno, agresiones sexuales, comportamientos perturbadores, el consumo de drogas como alcohol, tabaco, mariguana entre otras, tampoco será permitido ni aceptado la incitación a cometer delitos o ninguna de las actividades anteriormente mencionadas.</p>
      <h3>Consecuencias de comportamientos inaceptables.</h3>
      <p>No será tolerado bajo ninguna circunstancia el comportamiento indebido por parte de ningún organizador ni asistente al evento. Ante cualquier violación a este código, se le informará al infractor de manera cortés que se retire del evento, en caso de presentar actitudes violentas o que inciten a más violencia, será consignado a las autoridades competentes.</p>
      <p>Acerca de información sobre este código</p>
      <p>Todos los puntos sobre este código de conducta están abiertos a discusión con el comité organizador del evento. No se cierra las puertas a comentarios, al ser un evento comunitario queda estrictamente prohibida la toma de desiciones individuales.</p>
      <p>Comité organizador FLISoL Cancún 2019.</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  components: {
    Banner,
    Navbar
  },
  beforeCreate() {
    window.scroll(0,0); 
  }
};
</script>

<style lang="scss">
h1,
h2 {
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}
p {
  margin: 1rem 0;
  line-height: 1.6;
}

.code-of-conduct-container {
  width: 75%;
  text-align: justify;
}
</style>
