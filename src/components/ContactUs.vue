<template>
  <section class="contact-us" id="contacto">
    <div class="fl-container">
      <h4>¿Necesitas más información sobre FLISoL?</h4>
      <p>No dudes en contactarnos, es de la comunidad para la comunidad.</p>
      <p class="info-mail">
        <a href="mailto:info@flisol-cancun.com">info@flisol-cancun.com</a>
      </p>
      <!-- <a 
                class="button--secondary button--contact" 
                href="mailto:info@flisol-cancun.com">
                Envíar mensaje
      </a>-->
    </div>
    <footer class="main-footer">
      <div class="fl-container">
        <div class="footer-info">
          <div>
            Hecho con &#9829; en Cancún by 
            <router-link to="//www.slothtech.io">
                SlothTech
            </router-link>
          </div>
          <div>
            <router-link to="/codigo-de-conducta">Codigo de Conducta</router-link>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>
<style lang="scss">
.footer-info {
  display: flex;
  justify-content: space-between;
}
</style>


