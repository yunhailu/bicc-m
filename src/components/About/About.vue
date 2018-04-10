<template>
    <div class="about">
        <div class="about-header">
            <about-header></about-header>
        </div>
        <div class="about-content">
            <div class="about-content-item" @click="clickAction(item)" :key="index" v-for="(item, index) in about">
                <!--<card>-->
                    <div slot="content" class="about-content-item-card">
                        <div class="card-unit about-content-item-card-left">
                            <i :class="'fa fa-' + item.icon"></i>
                        </div>
                        <div class="card-unit about-content-item-card-center">{{item.text}}</div>
                        <div class="card-unit about-content-item-card-right">
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </div>
                <!--</card>-->
            </div>
        </div>
        <div class="about-bottom"></div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "About.less";
</style>

<script>
import { Card } from 'vux';
import AboutHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
import { about } from '../../libs/constants';

export default {
    name: 'About',
    data () {
        return {
            about,
            msg: 'Welcome to BICC!'
        };
    },
    methods: {
        clickAction (item) {
            console.log(item);
            const { name, params } = item;
            this.$router.push({ name, params });
        }
    },
    components: { Card, AboutHeader, Copyright }
};
</script>