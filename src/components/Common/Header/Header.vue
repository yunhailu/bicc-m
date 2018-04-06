<template>
    <div class="header" :class="{'header-active': drawerShow}">
        <div class="header-drawer">
            <drawer width="200px" :show.sync="drawerShow" show-mode="overlay" placement="left"
                    :drawer-style="{'background-color':'#35495e', width: '200px'}">
                <div slot="drawer" class="header-drawer-content">
                    <div class="header-drawer-content-title">hello world!</div>
                </div>
            </drawer>
        </div>
        <div class="header-wrapper">
            <div class="header-wrapper-unit header-wrapper-left" @click="switchTab">
                <i class="fa fa-th-list"></i>
            </div>
            <div class="header-wrapper-unit header-wrapper-right" @click="switchHome">
                <i class="fa fa-home"></i>
            </div>
            <div class="header-wrapper-center">
                <!--<img class="header-center-logo" src="../../../assets/logo.png" />-->
                <div class="header-wrapper-center-title">BEIJING INTERNATIONAL CHINESE COLLAGE</div>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Header.less";
</style>

<script>
import { Drawer } from 'vux';

export default {
    name: 'Header',
    data () {
        return {
            drawerShow: false,
            msg: 'Welcome to BICC!'
        };
    },
    methods: {
        switchTab () {
            console.log('switchTab');
            this.drawerShow = true;
        },
        switchHome () {
            console.log('switchHome');
        }
    },
    components: { Drawer }
};
</script>