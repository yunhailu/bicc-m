<template>
    <div class="detail">
        <div class="detail-header">
            <detail-header></detail-header>
        </div>
        <div class="detail-wrapper">
            <div class="detail-wrapper-container">
                <div class="detail-wrapper-container-title">{{title}}</div>
                <div class="detail-wrapper-container-cxt" v-html="html"></div>
                <div class="detail-wrapper-container-image">
                    <img :src="formatUrl(item.filename)" :key="index" v-for="(item, index) in images" />
                </div>
            </div>
            <copyright></copyright>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "Detail.less";
</style>

<script>
import _ from 'lodash';
import DetailHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
import { getDetail } from '../../libs/resourceApi';
// import { setAVoid } from '../../libs/reg';

export default {
    name: 'Detail',
    data () {
        return {
            title: '',
            html: '',
            images: []
        };
    },
    methods: {
        formatUrl (fileName) {
            return `http://www.hibicc.com/sites/hibicc.com/files/${fileName}`;
        },
        getDetail (id) {
            return getDetail({ id }).then(resp => {
                console.log(resp);
                this.title = resp.title;
                this.html = resp.body && resp.body.und && resp.body.und[0] && resp.body.und[0].safe_value;
                // this.html = setAVoid(this.html);
                // this.html = setTable(this.html);
                console.log(this.html);
                const field_image = resp.field_image && resp.field_image.und && resp.field_image.und.length ? resp.field_image.und : [];
                const field_testimonial = resp.field_testimonial && resp.field_testimonial.und && resp.field_testimonial.und.length ? resp.field_testimonial.und : [];
                this.images = _.concat(this.images, field_image, field_testimonial);
                console.log('this.image=======', field_image, field_testimonial, this.images);
            });
        },
        init () {
            console.log(this.$route);
            const id = this.$route.params.id || '';
            this.getDetail(id);
        }
    },
    mounted () {
        this.init();
    },
    components: { DetailHeader, Copyright }
};
</script>
