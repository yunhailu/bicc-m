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
    a{
        text-decoration: none;
    }
    list{
        list-style: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        height: 100%;
        background-color: #f3f3f3;
    }
    .vux-indicator{
        font-size: 14px;
    }
</style>
