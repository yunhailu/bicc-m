<template>
    <div class="cost">
        <div class="cost-item" :key="index" v-for="(image, index) in images" >
            <!--<x-img :src="image" class="cost-item-image" :offset="-100"></x-img>-->
            <img :src="image" class="cost-item-image"/>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Cost.less";
</style>

<script>
import { XImg } from 'vux';

export default {
    name: 'Cost',
    props: ['cost'],
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
    methods: {},
    components: { XImg }
};
</script>