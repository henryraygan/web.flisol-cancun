<template>
<nav :class="{'main-nav': true, 'is-scrolled': scrolled || $route.name != 'home'}">
    <div class="fl-container">
        <div class="main-nav-content">
            <div class="main-brand">
            <router-link to="/" class="navbar-brand">
                <img class="main-logo" src="../assets/images/FLISOL-LOGO-PNG.png" alt="">
                <span>Flisol Cancún</span>
            </router-link>
                <button :class="{'navbar-toggler': true, 'show': isShowMenu}" @click="showMenu">
                <div></div>
                <div></div>
                <div></div>
            </button>
            </div>
            <div v-if="$route.name != 'conducta'" 
                 :class="{'collapse-menu': true, 'show': isShowMenu}">
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">
                        Inicio
                    </a>
                    </li>
                    <li class="nav-item">
                        <a href="#sobre-flisol" class="nav-link">
                        Sobre FLISoL
                    </a>
                    </li>
                    <li class="nav-item">
                        <a href="#evento" class="nav-link">
                        Evento
                    </a>
                    <li class="nav-item">
                        <a href="#organizadores" class="nav-link">
                        Organizadores
                    </a>
                    </li>
                    <li class="nav-item">
                        <a href="#contacto" class="nav-link">
                        Contacto
                    </a>
                    </li>
                </ul>
            </div>
            <a
            href="//www.eventbrite.com/e/flisol-cancun-2019-tickets-59421970714" 
            target="_blank"
            class="button-ticket button--secondary button--small">
                Entradas
            </a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            scrolled: false,
            isShowMenu: false
        };
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },
        showMenu() {
            this.isShowMenu = !this.isShowMenu;
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
