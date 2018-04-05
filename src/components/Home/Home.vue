<template>
    <div class="home">
        <view-box ref="viewBox">
            <div class="home-search">
                <search v-model="searchValue" placeholder="search" @on-submit="searchAction"></search>
            </div>
            <swiper :list="swipers" :loop="true" :auto="true" :show-desc-mask="false" dots-position="center" height="160px"></swiper>
            <div class="home-recommends">
                <div class="home-recommends-title"><i class="fa fa-fort-awesome"></i> Ours School</div>
                <ul class="home-recommends-list">
                    <li class="home-recommends-list-item" :key="index" v-for="(item, index) in recommends" @click="recommendsAction(item)">
                        <div class="home-recommends-list-item-title">
                            <i class="fa fa-tags"></i> {{item.title | getHTMLCxt}}
                        </div>
                        <div class="home-recommends-list-item-imgs">
                            <div class="home-recommends-list-item-imgs-item" :key="i" v-for="(img, i) in item.field_image">
                                <img :src="getImageSrc(img)"/>
                            </div>
                        </div>
                        <div class="home-recommends-list-item-cxt" v-html="item.body"></div>
                    </li>
                </ul>
            </div>
            <tab-bar></tab-bar>
        </view-box>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Home.less";
</style>

<script>
import { Search, ViewBox, Swiper } from 'vux';
import TabBar from '../Common/TabBar/TabBar.vue';
import { getImageSrc, getAHref, getHTMLCxt } from '../../libs/reg';
import { homesSliders, homesArticle, homesRecommends } from '../../libs/resourceApi';

export default {
    name: 'Hello',
    data () {
        return {
            swipers: [],
            recommends: [],
            searchValue: '',
            msg: 'Welcome to BICC!'
        };
    },
    filters: {
        getAHref (html) {
            return getAHref(html)[0];
        },
        getHTMLCxt (html) {
            return getHTMLCxt(html, 'a')[0];
        }
    },
    methods: {
        getImageSrc,
        searchAction () {
            if (!this.searchValue) {
                return;
            }
            console.log(this.searchValue);
            this.searchValue = '';
        },
        recommendsAction (item) {
            console.log(item, getAHref(item.title)[0]);
        },
        getSlider () {
            return homesSliders().then(resp => {
                if (resp.length > 0) {
                    this.swipers = resp.map(item => {
                        const img = getImageSrc(item.field_image)[0];
                        return { img };
                    });
                }
            });
        },
        getArticle () {
            return homesArticle().then(resp => {
                console.log('homesArticle', resp);
            });
        },
        getRecommends () {
            return homesRecommends().then(resp => {
                console.log(resp);
                if (resp.length > 0) {
                    this.recommends = resp;
                    console.log(this.recommends.map(item => item.title));
                    console.log(this.recommends.map(item => getAHref(item.title)[0]));
                    console.log(this.recommends.map(item => getHTMLCxt(item.title, 'a')[0]));
                }
            });
        },
        init () {
            this.getSlider();
            this.getArticle();
            this.getRecommends();
        }
    },
    mounted () {
        this.init();
    },
    components: { TabBar, Search, ViewBox, Swiper }
};
</script>