<template>
    <div class="services">
        <div class="services-header">
            <services-header></services-header>
        </div>
        <div class="services-tab">
            <tab :line-width="4">
                <tab-item selected @on-item-click="handler">Service</tab-item>
                <tab-item @on-item-click="handler">Accommodation</tab-item>
            </tab>
        </div>
        <div class="services-content" :class="[active == 'service' ? 'services-content-service-active' : 'services-content-accommodations-active']">
            <div class="services-content-item services-content-service">
                <service :service.sync="service"></service>
            </div>
            <div class="services-content-item services-content-accommodations">
                <accommodations :accommodations="accommodations"></accommodations>
            </div>
        </div>
        <div class="services-bottom">
            <copyright></copyright>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Services.less";
</style>

<script>
import _ from 'lodash';
import { Tab, TabItem } from 'vux';
import ServicesHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
import Service from './Service/Service.vue';
import Accommodations from './Accommodations/Accommodations.vue';
import { getImageSrc, getHTMLCxt } from '../../libs/reg';
import { getServices, getAccommodations } from '../../libs/resourceApi';

export default {
    name: 'Services',
    data () {
        return {
            service: {},
            accommodations: {},
            active: 'service'
        };
    },
    methods: {
        handler (index) {
            this.active = index == 0 ? 'service' : 'accommodations';
            console.log(index, this.active);
        },
        getServices () {
            return getServices().then(resp => {
                if (resp.length > 0) {
                    this.service = _.map(resp, item => {
                        item.image = getImageSrc(item.field_image)[0];
                        item.description = getHTMLCxt(item.desc, 'p')[0];
                        return item;
                    });
                    console.log(this.service);
                    return this.service;
                }
                return [];
            });
        },
        getAccommodations () {
            return getAccommodations().then(resp => {
                if (resp.length > 0) {
                    this.accommodations = _.map(resp, item => {
                        item.img = getImageSrc(item.image)[0];
                        item.description = getHTMLCxt(item.desc, 'p')[0] || getHTMLCxt(item.desc, 'div')[0];
                        return item;
                    });
                    console.log(this.accommodations);
                    return this.accommodations;
                }
                return [];
            });
        },
        init () {
            this.getServices();
            this.getAccommodations();
        }
    },
    mounted () {
        this.init();
    },
    components: { Tab, TabItem, ServicesHeader, Copyright, Service, Accommodations }
};
</script>