<template>
    <div class="card">
        <div class="card-item">
            <div class="card-item-image">
                <img :src="item.image" />
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Card.less";
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