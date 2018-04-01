<template>
    <div class="hello">
        <i class="fa fa-pencil fa-fw" aria-hidden="true"></i>
        <h1>{{ msg }}</h1>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Home.less";
</style>

<script>
    export default {
        name: 'Hello',
        data () {
            return {
                msg: 'Welcome to BICC!'
            };
        }
    };
</script>