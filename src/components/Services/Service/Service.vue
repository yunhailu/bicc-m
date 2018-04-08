<template>
    <div class="service">
        <div class="service-intro">
            <img class="service-intro-image" src="http://www.hibicc.com/system/files/720998880946795072.jpg" />
            <p>We pride ourselves on providing quality courses and services in a relaxed and friendly atmosphere. Our dedicated team of full time staff are always at your disposal for advice and assistance.</p>
            <p>Check out our excellent facilities at BICC. </p>
        </div>
        <div class="service-cards">
            <div class="service-cards-item" :key="index" v-for="(item, index) in service" @click="itemAction(item)">
                <card>
                    <img slot="header" class="service-cards-item-image" :src="item.image" />
                    <div slot="content" class="service-cards-item-content">
                        <div class="service-cards-item-more">more <i class="fa fa-angle-right"></i></div>
                        <p class="service-cards-item-content-title" v-html="item.title"></p>
                        <p class="service-cards-item-content-text">{{item.desc}}</p>
                        <p class="service-cards-item-content-date">Posted on {{item.date | formatDate}}</p>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Service.less";
</style>

<script>
import { Card, XImg } from 'vux';
import { Moment } from '../../../libs/util';

export default {
    name: 'Service',
    props: ['service'],
    data () {
        return {};
    },
    methods: {
        itemAction (item) {
            console.log('click this: ', item);
        }
    },
    filters: {
        formatDate (tamp) {
            return new Moment(+tamp).format('MMMM D, YYYY');
        }
    },
    components: { Card, XImg }
};
</script>