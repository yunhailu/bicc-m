<template>
    <div class="list">
        <div class="list-header">
            <list-header></list-header>
        </div>
        <div class="list-content">
            <div class="list-content-tag">
                <div class="list-content-tag-item" @click="clickAction(value)" :key="key" v-for="(value, key) in list">
                    <tag-item :item="value" :index="key"></tag-item>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "List.less";
</style>

<script>
import _ from 'lodash';
import ListHeader from '../Common/Header/Header.vue';
import TagItem from './TagItem/TagItem.vue';
import { testimonials, teachers, recommendations, partners } from '../../libs/resourceApi';
import { getImageSrc } from '../../libs/reg';

export default {
    name: 'List',
    data () {
        return {
            list: []
        };
    },
    methods: {
        getList () {
            const Api = { testimonials, teachers, recommendations, partners };
            const uri = this.$route.params.category;
            if (_.some(Api, (item, key) => (uri == key && item))) {
                return Api[uri]().then(resp => {
                    this.list = _.map(resp, item => {
                        item.image = getImageSrc(item.field_image)[0];
                        return item;
                    });
                    return this.list;
                });
            }
            return null;
        },
        clickAction (item) {
            console.log(item);
        },
        init () {
            this.getList();
        }
    },
    mounted () {
        this.init();
    },
    components: { ListHeader, TagItem }
};
</script>