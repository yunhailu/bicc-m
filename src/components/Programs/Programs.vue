<template>
    <div class="programs">
        <div class="programs-header">
            <programs-header></programs-header>
        </div>
        <div class="programs-tab">
            <tab :line-width="4">
                <tab-item selected @on-item-click="handler">Course</tab-item>
                <tab-item @on-item-click="handler">Cost</tab-item>
            </tab>
        </div>
        <div class="programs-content" :class="[active == 'courses' ? 'programs-content-courses-active' : 'programs-content-cost-active']">
            <div class="programs-content-item programs-content-courses">
                <courses :courses.sync="courses"></courses>
            </div>
            <div class="programs-content-item programs-content-cost">
                <cost :cost="cost"></cost>
            </div>
        </div>
        <copyright></copyright>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "Programs.less";
</style>

<script>
import _ from 'lodash';
import { Tab, TabItem } from 'vux';
import ProgramsHeader from '../Common/Header/Header.vue';
import Copyright from '../Common/Copyright/Copyright.vue';
import Courses from './Courses/Courses.vue';
import Cost from './Cost/Cost.vue';
import { getHTMLCxt } from '../../libs/reg';
import { getCourses, getProducts } from '../../libs/resourceApi';

export default {
    name: 'Programs',
    data () {
        return {
            courses: {},
            cost: {},
            active: 'courses'
        };
    },
    methods: {
        handler (index) {
            this.active = index == 0 ? 'courses' : 'cost';
            console.log(index, this.active);
        },
        getCourses () {
            return getCourses().then(resp => {
                if (resp.length > 0) {
                    this.courses = _.chain(resp).groupBy((item) => {
                        item.desc = getHTMLCxt(item.Overview, 'p')[0];
                        item.meta = {
                            source: item.field_course_type[0].toLowerCase(),
                            other: `lesson/week: ${item['lesson/week'] || 0}`
                        };
                        item.url = '';
                        return item.field_course_type[0];
                    }).map((item, key) => {
                        return {
                            name: key,
                            data: item
                        };
                    }).reverse().value();
                    console.log('courses', this.courses);
                    return this.courses;
                }
                return [];
            });
        },
        getProducts () {
            return getProducts().then(resp => {
                if (resp.length > 0) {
                    this.cost = resp;
                    return this.cost;
                }
                return [];
            });
        },
        init () {
            this.getCourses();
            this.getProducts();
        }
    },
    mounted () {
        this.init();
    },
    components: { Tab, TabItem, ProgramsHeader, Copyright, Courses, Cost }
};
</script>