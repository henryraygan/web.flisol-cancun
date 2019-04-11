<template>
    <div class="banner" id="home">
        <img src="../assets/images/flisol-gente.jpg" alt="">
        <!-- <img src="https://media.metrolatam.com/2018/01/23/flisol-1200x600.jpg" alt=""> -->
        <div class="banner__content">
            <p class="banner__subtitle" v-scroll-reveal="{ delay: 350 }">
                15º Edición del
            </p>
            <h1 class="banner__title" v-scroll-reveal="{ delay: 450 }">FLISOL Cancún 2019</h1>
            <p class="banner__subtitle" v-scroll-reveal="{ delay: 500 }">
                27 de abril de 2019
            </p>
            <button v-if="false" class="button--primary button--large">
                27 de Abril de 2019
            </button>
            <br>
            <a 
                v-scroll-reveal="{ delay: 520 }"
                href="//www.eventbrite.com/e/flisol-cancun-2019-tickets-59421970714" 
                target="_blank" 
                class="button--secondary button--large">
                Entradas gratuitas
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>
