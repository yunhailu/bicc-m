<template>
    <div class="accommodations">
        <div class="accommodations-item" :key="groupName" v-for="(group, groupName) in accommodations">
            <panel :header="groupName" :list="group" type="4" @on-click-item="itemAction"></panel>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Accommodations.less";
</style>

<script>
import { Panel } from 'vux';

export default {
    name: 'Accommodations',
    props: ['accommodations'],
    data () {
        return {
            list: this.accommodations
        };
    },
    methods: {
        itemAction (...rest) {
            console.log(rest);
        },
        toDetail (course) {
            console.log(course.nid);
        }
    },
    components: { Panel }
};
</script>