<template>
<div>
    <h1>Page Not Found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
</div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100vh;
    top: 0;
    position: absolute;
    display: grid;
    align-content: center;
    align-items: center;
    justify-content: center;
}

h1,p {
    text-align: center;
}

h1 {
    color: #555;
    font-size: 2em;
    font-weight: 400;
}

p {
    margin: 0 auto;
    width: 280px;
}

@media only screen and (max-width: 280px) {

    body,
    p {
        width: 95%;
    }

    h1 {
        font-size: 1.5em;
        margin: 0 0 0.3em;
    }

}
</style>
