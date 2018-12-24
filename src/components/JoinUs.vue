<template>
    <section class="joinus-section">
        <img src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="">
        <div class="fl-container">
            <h2 class="title-section">
                Participa en el evento
            </h2>
            <div class="joinus-section__content">
                <div class="joinus-section__item">
                    <h3 class="title">Patrocinador</h3>
                    <p class="subtitle">
                        FLISOL es un evento sin ánimo de lucro, los organizadores no buscamos ningún beneficio económico con la realización del evento
                    </p>
                    <button class="button--primary">
                        Consulta el Call for sponsor
                    </button>                    
                </div>
                <div class="joinus-section__item">
                    <h3 class="title">Ponencia</h3>
                    <p class="subtitle">
                        FLISOL es un evento sin ánimo de lucro, los organizadores no buscamos ningún beneficio económico con la realización del evento
                    </p>
                    <button class="button--primary">
                        Consulta el Call for sponsor
                    </button>                       
                </div>
                <div class="joinus-section__item">
                    <h3 class="title">Proyectos</h3>
                    <p class="subtitle">
                        FLISOL es un evento sin ánimo de lucro, los organizadores no buscamos ningún beneficio económico con la realización del evento
                    </p>
                    <button class="button--primary">
                        Consulta el Call for sponsor
                    </button>                       
                </div>
                <div class="joinus-section__item">
                    <h3 class="title">Taller</h3>
                    <p class="subtitle">
                        FLISOL es un evento sin ánimo de lucro, los organizadores no buscamos ningún beneficio económico con la realización del evento
                    </p>
                    <button class="button--primary">
                        Consulta el Call for sponsor
                    </button>                       
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "JoinUs"
};
</script>

<style lang="scss">
.joinus-section {
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .title-section {
    color: #fff;
  }
  .fl-container {
    padding: 2rem 0;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.22;
  }

  &__content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
  }

  &__item {
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: #fff;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #dee2e6;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 0.875rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 1rem;
    }
    .subtitle {
      line-height: 1.5;
      color: #343a40;
      margin: 0.5rem 0;
    }
  }
}

@media (max-width: 40em) {
  body {
    background: red;
  }
}
</style>
