<template>
    <nav :class="{'main-nav': true, 'is-scrolled': scrolled}">
        <div class="fl-container">
            <div class="main-nav-container">
                <div class="main-brand">
                    <img class="main-logo" src="/images/FLISOL-LOGO-PNG.png" alt="">
                    <button class="burguer-button">
                        span
                    </button>
                </div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            Inicio
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
    </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      console.log(this.scrolled)
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

<style lang="scss">

.main-nav {
    background: red;
    position: fixed;
    z-index: 1000;
    width: 100%;
    padding: 1rem 0;
    transition: all .3s ease;
    &-container {
        width: 100%;
    }

    &.is-scrolled {
        padding: .2rem 0;
    }
}

.main-logo {
    width: 60px;
}

.main-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


// .main-logo {
//   margin-left: 1rem;
//   width: 80px;
//   object-fit: cover;
// }

// .main-nav {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   z-index: 1030;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.15);
//   color: #fff;
//   align-items: center;
//   transition: all .3s ease;
//   height: 100px;



//   &.is-white {
//     height: 80px;
//     background-color: rgba(255,255,255,.98);
//     border-bottom: 1px solid rgba(0,0,0,.09);
//     color: rgba(0,0,0,.9);
//     .main-logo {
//         width: 60px;
//     }
//   }

// }

// .nav {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style-type: none;
//   &-item {
//     text-transform: uppercase;
//     letter-spacing: 0.09375rem;
//     position: relative;
//     text-transform: uppercase;
//     font-size: 0.6875rem;
//     font-weight: 600;
//     padding: 1em 1.5em;
//   }
// }
</style>