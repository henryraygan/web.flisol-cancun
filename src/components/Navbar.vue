<template>
    <nav :class="{'main-nav': true, 'is-scrolled': scrolled}">
        <div class="main-brand">
            <a class="navbar-brand" href="#">
                <img class="main-logo" src="/images/FLISOL-LOGO-PNG.png" alt="">
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
                    <a href="" class="nav-link">
                        Inicio
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">
                        Aprende sobre flisol
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">
                        Organizadores
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
        <button class="button-ticket button--secondary">
            Get your tickets
        </button>
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
      console.log(this.scrolled)
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
