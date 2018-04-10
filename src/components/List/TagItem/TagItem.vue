<template>
    <div class="tag">
        <div class="tag-spot">
            <div class="tag-spot-line"></div>
            <div class="tag-spot-cxt" :class="style">
                <i class="fa fa-paperclip"></i>
            </div>
        </div>
        <div class="tag-item">
            <div class="tag-item-icon">
                <div class="tag-item-icon-img" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
            </div>
            <div class="tag-item-text">{{item.title}}</div>
            <div class="tag-item-user" :class="style"><i class="fa fa-angle-right"></i></div>
            <div class="tag-item-trigle"></div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "TagItem.less";
</style>

<script>
export default {
    name: 'TagItem',
    props: ['item', 'index'],
    computed: {
        style () {
            const i = parseInt(this.index, 10);
            switch (i % 5) {
                case 0:
                    return 'purple';
                case 1:
                    return 'yellow';
                case 2:
                    return 'red';
                case 3:
                    return 'blue';
                case 4:
                    return 'green';
                default:
                    return 'purple';
            }
        }
    },
    data () {
        return {
            msg: 'Welcome to BICC!'
        };
    }
};
</script>