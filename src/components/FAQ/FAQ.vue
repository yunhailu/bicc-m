<template>
    <div class="FAQ">
        <div class="FAQ-header">
            <faq-header></faq-header>
        </div>
        <div class="FAQ-wrapper">
            <div class="FAQ-wrapper-container">
                <div class="FAQ-wrapper-container-image">
                    <img src="http://www.hibicc.com/sites/hibicc.com/files/bicc%20banner.jpg" />
                </div>
                <div class="FAQ-wrapper-container-title">FAQ</div>
                <div class="FAQ-wrapper-container-item" :key="index" v-for="(item, index) in faqs">
                    <div class="FAQ-wrapper-container-item-title">{{item.title}}</div>
                    <div class="FAQ-wrapper-container-item-answer" v-html="item.A"></div>
                </div>
            </div>
            <copyright></copyright>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "FAQ.less";
</style>

<script>
import { getFAQ } from '../../libs/resourceApi';
import FaqHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';

export default {
    name: 'FAQ',
    data () {
        return {
            faqs: []
        };
    },
    methods: {
        getFAQ () {
            return getFAQ().then(resp => {
                this.faqs = resp;
                return this.faqs;
            });
        },
        init () {
            this.getFAQ();
        }
    },
    mounted () {
        this.init();
    },
    components: { FaqHeader, Copyright }
};
</script>