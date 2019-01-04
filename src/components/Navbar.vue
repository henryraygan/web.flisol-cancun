<template>
<nav :class="{'main-nav': true, 'is-scrolled': scrolled}">
    <div class="fl-container">
        <div class="main-nav-content">
            <div class="main-brand">
            <a class="navbar-brand" href="#home">
                <img class="main-logo" src="../assets/images/FLISOL-LOGO-PNG.png" alt="">
                <span>Flisol Cancún</span>
            </a>
                <button :class="{'navbar-toggler': true, 'show': isShowMenu}" @click="showMenu">
                <div></div>
                <div></div>
                <div></div>
            </button>
            </div>
            <div :class="{'collapse-menu': true, 'show': isShowMenu}">
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
            href="#participa" 
            class="button-ticket button--secondary button--small">
                Participa
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
