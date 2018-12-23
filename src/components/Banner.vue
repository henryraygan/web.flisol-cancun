<template>
    <div class="banner">
        <img src="https://1.bp.blogspot.com/-J3Ydb8nxu0g/Vxznv7Vvd7I/AAAAAAAAF_I/e3pnKh9G0XAN7Sa6pGmCxXaQ9EjSgQW0ACLcB/s1600/2016-04-23%2B13.32.28.jpg" alt="">
        <div class="banner__content">
            <h1 class="banner__title">Flison Cancún 2019</h1>
            <p class="banner__subtitle">
                Festival latinoamericano de instalación de software libre
            </p>
            <button class="button--primary">
                Get your tickets
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style lang="scss">

.banner {
    width: 100%;
    height: 100vh;
    position: relative;
    background : #000;
    img {
        width      : 100%;
        height     : 100%;
        object-fit : cover;
        opacity    : 0.22;
        position   : absolute;
    }
    &__content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        color: #FFF;
    }

    &__title {
        font-weight: 700;
        text-transform: uppercase;
    }
}

</style>