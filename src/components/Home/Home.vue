<template>
    <div class="home">
        <!--<view-box ref="viewBox">-->
        <div class="home-search">
            <search v-model="searchValue" placeholder="search" @on-submit="searchAction"></search>
        </div>
        <tab-bar></tab-bar>
        <!--</view-box>-->
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Home.less";
</style>

<script>
import { Search, ViewBox, Icon } from 'vux';
import TabBar from '../Common/TabBar/TabBar.vue';

export default {
    name: 'Hello',
    data () {
        return {
            searchValue: '',
            msg: 'Welcome to BICC!'
        };
    },
    methods: {
        searchAction () {
            if (!this.searchValue) {
                return;
            }
            console.log(this.searchValue);
            this.searchValue = '';
        }
    },
    components: { TabBar, Search, ViewBox, Icon }
};
</script>