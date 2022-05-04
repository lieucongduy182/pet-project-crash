<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
}

nav {
    display: flex;
    padding: 20px 50px;
    background-color: #231f20;
    justify-content: space-between;
    a {
        font-weight: bold;
        color: #2c3e50;
        font-size: 30px;
        text-decoration: none;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
