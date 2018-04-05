<template>
    <div class="tabbar">
        <tabbar slot="bottom">
            <tabbar-item selected link="/">
                <span slot="label"><i class="fa fa-home"></i> Home</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <span slot="label"><i class="fa fa-folder"></i> Programs</span>
            </tabbar-item>
            <tabbar-item link="/hello">
                <span slot="label"><i class="fa fa-server"></i> Services</span>
            </tabbar-item>
            <tabbar-item badge="2">
                <span slot="label"><i class="fa fa-user-circle"></i> About us</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "TabBar.less";
</style>

<script>
import { Tabbar, TabbarItem } from 'vux';
export default {
    name: 'TabBar',
    data () {
        return {
            msg: 'Welcome to TabBar!'
        };
    },
    components: {
        Tabbar,
        TabbarItem
    }
};
</script>