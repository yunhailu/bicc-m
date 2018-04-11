<template>
    <div class="accommodations">
        <div class="accommodations-intro">
            <!--<img class="accommodations-intro-image" src="http://www.hibicc.com/system/files/720998880946795072.jpg" />-->
            <p>BICC has several accommodation In Beijing available to students, all within close proximity to the school. Accommodation are carefully selected and is ensured that BICC sponsored housing is both safe and comfortable. Accommodation fees vary according to the type of accommodation and the duration of stay.</p>
            <p class="bold">Current BICC accommodation options include:</p>
            <!--<p>Homestay in Beijing - Private studio - Shared studio - MaQuaYing dormitory.</p>-->
        </div>
        <div class="accommodations-cards">
            <div class="accommodations-cards-item" :key="index" v-for="(item, index) in accommodations" @click="itemAction(item)">
                <card>
                    <img slot="header" class="accommodations-cards-item-image" :src="item.img" />
                    <div slot="content" class="accommodations-cards-item-content">
                        <div class="accommodations-cards-item-more">more <i class="fa fa-angle-right"></i></div>
                        <p class="accommodations-cards-item-content-title" v-html="item.title"></p>
                        <p class="accommodations-cards-item-content-text">{{item.description}}</p>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Accommodations.less";
</style>

<script>
import { Card } from 'vux';

export default {
    name: 'Accommodations',
    props: ['accommodations'],
    data () {
        return {
            list: this.accommodations
        };
    },
    methods: {
        itemAction (item) {
            console.log(item);
            this.$router.push({ name: 'detail', params: { id: item.nid } });
        },
        toDetail (course) {
            console.log(course.nid);
        }
    },
    components: { Card }
};
</script>