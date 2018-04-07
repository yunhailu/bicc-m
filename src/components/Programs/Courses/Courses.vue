<template>
    <div class="courses">
        <div class="courses-item" :key="groupName" v-for="(group, groupName) in courses">
            <panel :header="groupName" :list="group" type="4" @on-click-item="itemAction"></panel>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Courses.less";
</style>

<script>
import { Panel } from 'vux';

export default {
    name: 'Courses',
    props: ['courses'],
    data () {
        return {
            list: this.courses
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