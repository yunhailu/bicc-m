<template>
    <div class="home">
        <!--<view-box ref="viewBox">-->
            <!--<div class="home-search">-->
                <!--<search v-model="searchValue" placeholder="search" @on-submit="searchAction"></search>-->
            <!--</div>-->
            <div class="home-header">
                <home-header></home-header>
            </div>
            <div class="home-swipers">
                <swiper :list="swipers" :loop="true" :auto="true" :show-desc-mask="false" dots-position="center" height="100%"></swiper>
            </div>
            <div class="home-intro">
                <div class="home-intro-cxt">
                    Since 2005, <span class="home-intro-cxt-bold">BICC - Beijing International Chinese College</span> offers Chinese Mandarin Language Courses and <span class="home-intro-cxt-bold">Chinese Culture</span> Courses, as well as HSK test preparation and Business Chinese to people from all over the world. We are a professional educational institution devoted to the international promotion of <span class="home-intro-cxt-bold">Chinese Mandarin Language</span> and Culture. Our school has 3 campuses with more than 30 classrooms, equipped with exceptional facilities and resources to support your study of Chinese Mandarin Language in Beijing. Our courses are flexible and affordable, our teachers and staff are very experienced and engaged in making your study time with us the best time you could ever have, and we are one the only Private <span class="home-intro-cxt-bold">Chinese language</span> schools in Beijing that can issue free short-term and long-term student visa.
                </div>
                <img class="home-intro-logo" src="http://www.hibicc.com/sites/hibicc.com/files/bicc%20banner.jpg" />
            </div>
            <div class="home-recommends">
                <!--<div class="home-recommends-title"><i class="fa fa-fort-awesome"></i> Ours College</div>-->
                <ul class="home-recommends-list">
                    <li class="home-recommends-list-item" :key="index" v-for="(item, index) in recommends" @click="recommendsAction(item)">
                        <div class="home-recommends-list-item-imgs">
                            <div class="home-recommends-list-item-imgs-item" :key="i" v-for="(img, i) in item.field_image">
                                <img :src="getImageSrc(img)"/>
                            </div>
                        </div>
                        <div class="home-recommends-list-item-title">
                            <i class="fa fa-tags"></i> {{item.title | getHTMLCxt}}
                        </div>
                        <div class="home-recommends-list-item-cxt" v-html="item.body"></div>
                    </li>
                </ul>
            </div>
            <copyright></copyright>
            <!--<tab-bar></tab-bar>-->
        <!--</view-box>-->
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Home.less";
</style>

<script>
import { Search, ViewBox, Swiper } from 'vux';
import TabBar from '../Common/TabBar/TabBar.vue';
import HomeHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
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
                if (resp.length > 0) {
                    this.recommends = resp;
                }
            });
        },
        init () {
            this.getSlider();
            // this.getArticle();
            this.getRecommends();
        }
    },
    mounted () {
        this.init();
    },
    components: { TabBar, HomeHeader, Copyright, Search, ViewBox, Swiper }
};
</script>