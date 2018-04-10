<template>
    <div class="contact">
        <div class="contact-header">
            <contact-header></contact-header>
        </div>
        <div class="contact-wrapper">
            <div class="contact-wrapper-container">
                <div class="contact-wrapper-container-title">Contact Us</div>
                <div class="contact-wrapper-container-item">
                    <div class="contact-wrapper-container-item-title">Maquanying Campus</div>
                    <p><i class="fa fa-building"></i> Address:  No.1 Compound No.72, Shunbai Road, Chaoyang District, Beijing, China. 100103</p>
                    <p><i class="fa fa-phone"></i> Tel: +8610-65072401</p>
                    <p><i class="fa fa-envelope"></i> Email: info@hibicc.com</p>
                </div>
                <div class="contact-wrapper-container-item">
                    <div class="contact-wrapper-container-item-title">Sanlitun Campus</div>
                    <p><i class="fa fa-building"></i> Address: Baijiazhuang Xili No. 2, behind Beijing No.80 Middle School (South gate), Chaoyang District, Beijing, 100026</p>
                    <p><i class="fa fa-phone"></i> Tel: +8610-65072401, +8610-59039267</p>
                    <p><i class="fa fa-envelope"></i> Email: info@hibicc.com</p>
                    <p>Directions: Hujialou station (subway line 10), Exit E <br>From East 3rd Ring Road North, walk on the lane between Alhambra Palace and Conrad Hotel (KanglaiDe JiuDian). We're right next to Conrad hotel.</p>
                    <p>BICC Sanlitun Campus - map</p>
                    <img src="http://www.hibicc.com/sites/hibicc.com/files/Sanlitun%20campus%20map_1.png" />
                </div>
                <div class="contact-wrapper-container-item">
                    <div class="contact-wrapper-container-item-title">Maizidian Campus</div>
                    <p><i class="fa fa-building"></i> Address: Chaoyang Park West Road No.11, 2F, Chaoyang District, Beijing, 100125</p>
                    <p><i class="fa fa-phone"></i> Tel:+8610-65931055</p>
                    <p><i class="fa fa-envelope"></i> Email: info@hibicc.com</p>
                    <p>BICC Maizidian Campus - map</p>
                    <img src="http://www.hibicc.com/sites/hibicc.com/files/Maizidian%20map_0.png" />
                </div>
            </div>
            <copyright></copyright>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "ContactUs.less";
</style>

<script>
import ContactHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';

export default {
    name: 'Contact',
    data () {
        return {
            title: '',
            html: ''
        };
    },
    methods: {
        init () {}
    },
    mounted () {
        this.init();
    },
    components: { ContactHeader, Copyright }
};
</script>