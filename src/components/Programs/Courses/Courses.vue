<template>
    <div class="courses">
        <div class="courses-item" :key="groupName" v-for="(group, groupName) in courses">
            <panel :header="group.name" :list="group.data" type="4" @on-click-item="itemAction"></panel>
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
        itemAction (item) {
            console.log(item);
            this.$router.push({ name: 'detail', params: { id: item.nid } });
        },
        toDetail (course) {
            console.log(course.nid);
        }
    },
    components: { Panel }
};
</script>