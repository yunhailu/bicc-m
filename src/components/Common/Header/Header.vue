<template>
    <div class="header" :class="{'header-active': drawerShow}">
        <div class="header-drawer" :class="{'header-drawer-active': drawerShow}">
            <drawer :show.sync="drawerShow" show-mode="overlay" placement="left"
                    :drawer-style="{'background-color':'#35495e', width: '200px'}">
                <div slot="drawer" class="header-drawer-content">
                    <div class="header-drawer-content-top">
                        <img class="header-drawer-content-top-icon" src="../../../assets/logo.png" />
                        <span class="header-drawer-content-top-text">BICC</span>
                    </div>
                    <ul class="header-drawer-content-list">
                        <li class="header-drawer-content-list-item" :key="index" v-for="(item, index) in list">
                            <i class="fa" :class="'fa-'+item.icon"></i>
                            <span class="header-drawer-content-list-item-text">{{item.text}}</span>
                        </li>
                    </ul>
                    <div class="header-drawer-content-bottom">© 2018 copyright hibicc.com</div>
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
import { headerList, host } from '../../../libs/constants';

export default {
    name: 'Header',
    data () {
        return {
            host,
            drawerShow: false,
            list: headerList
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