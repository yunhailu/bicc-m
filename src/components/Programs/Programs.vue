<template>
    <div class="programs">
        <div class="programs-header">
            <programs-header></programs-header>
        </div>
        <div class="programs-tab">
            <tab :line-width="2">
                <tab-item @on-item-click="handler">Course</tab-item>
                <tab-item @on-item-click="handler">Cost</tab-item>
            </tab>
        </div>
        <copyright></copyright>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Programs.less";
</style>

<script>
import { Tab, TabItem } from 'vux';
import ProgramsHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';

export default {
    name: 'Programs',
    data () {
        return {
            msg: 'Welcome to BICC!'
        };
    },
    methods: {
        handler () {
            console.log(123);
        }
    },
    components: { ProgramsHeader, Copyright, Tab, TabItem }
};
</script>