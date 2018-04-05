<template>
    <div class="home">
        <!--<view-box ref="viewBox">-->
        <div class="home-search">
            <search v-model="searchValue" placeholder="search" @on-submit="searchAction"></search>
        </div>
        <swiper :list="list" :loop="true" :auto="true" :show-desc-mask="false" dots-position="center" height="200px"></swiper>
        <tab-bar></tab-bar>
        <!--</view-box>-->
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Home.less";
</style>

<script>
import { Search, ViewBox, Icon, Grid, GridItem, Swiper } from 'vux';
import TabBar from '../Common/TabBar/TabBar.vue';
import { getImageSrc } from '../../libs/reg';
import { homesSliders, homesArticle } from '../../libs/resourceApi';

export default {
    name: 'Hello',
    data () {
        return {
            list: [],
            searchValue: '',
            msg: 'Welcome to BICC!'
        };
    },
    methods: {
        searchAction () {
            if (!this.searchValue) {
                return;
            }
            console.log(this.searchValue);
            this.searchValue = '';
        },
        getSlider () {
            homesSliders().then(resp => {
                console.log('homesSliders', resp);
                if (resp.length > 0) {
                    this.list = resp.map(item => {
                        const img = getImageSrc(item.field_image)[0];
                        return { img };
                    });
                }
            });
        },
        getArticle () {
            homesArticle().then(resp => {
                console.log('homesArticle', resp);
            });
        },
        init () {
            this.getSlider();
            this.getArticle();
        }
    },
    mounted () {
        this.init();
    },
    components: { TabBar, Search, ViewBox, Icon, Grid, GridItem, Swiper }
};
</script>