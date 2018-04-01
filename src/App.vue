<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import 'font-awesome/less/font-awesome.less';
export default {
    name: 'App'
};
</script>

<style lang="less">
    html, body, * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
