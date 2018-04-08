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
        return {
            images: [
                'http://www.hibicc.com/sites/hibicc.com/files/cost.png',
                'http://www.hibicc.com/sites/hibicc.com/files/regular_0.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/regular%20homestay.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/regular%20dorm.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/intensive.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/intensive%20homestay.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/Capture%20d%E2%80%99e%CC%81cran%202017-02-08%20a%CC%80%2011.45.51.png',
                'http://www.hibicc.com/sites/hibicc.com/files/private.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/private%20homestay.JPG',
                'http://www.hibicc.com/sites/hibicc.com/files/private%20dorm.JPG'
            ]
        };
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