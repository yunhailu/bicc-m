<template>
    <div class="detail">
        <div class="detail-header">
            <detail-header></detail-header>
        </div>
        <div class="detail-wrapper">
            <div class="detail-wrapper-container">
                <div class="detail-wrapper-container-title">{{title}}</div>
                <div class="detail-wrapper-container-cxt" v-html="html"></div>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "Detail.less";
</style>

<script>
import DetailHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
import { getDetail } from '../../libs/resourceApi';
import { setAVoid } from '../../libs/reg';

export default {
    name: 'Detail',
    data () {
        return {
            title: '',
            html: ''
        };
    },
    methods: {
        getDetail (id) {
            return getDetail({ id }).then(resp => {
                console.log(resp);
                this.title = resp.title;
                this.html = resp.body && resp.body.und && resp.body.und[0] && resp.body.und[0].safe_value;
                this.html = setAVoid(this.html);
                console.log(setAVoid(this.html));
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