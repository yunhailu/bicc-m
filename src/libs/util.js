/**
 * Created by yunhailu on 2018/4/8.
 */

/**
 * @description Moment(简易版)
 * @params {String} arg -选填项, 时间戳, 不填为当前时间
 * */
export class Moment {
    constructor (arg = new Date().getTime()) {
        this.date = new Date(arg);
    }

    /**
     * @description 静态unix方法
     * @params {String} 参数timestamp -必填项, 毫秒数(new Date()只能接受毫秒的参数需要乘1000)
     * @return {Date} Date对象
     * */
    static unix (timestamp) {
        return new Moment(timestamp * 1000);
    }

    /**
     * @description getTime()返回的是毫秒数，需要转成秒数并取整
     * @return {String} 将毫秒转化成秒
     * */
    unix () {
        return Math.round(this.date.getTime() / 1000);
    }

    /**
     * @description 时间格式化, Moment(简易版) format
     * @params {String} arg -选填项, 时间戳, 不填为当前时间
     * */
    format (formatStr) {
        const date = this.date;
        const monthAbbreviation = [
            'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.',
            'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'
        ];
        const monthFull = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'Aguest', 'September', 'October', 'November', 'December'
        ];
        const weeks = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
        const weeksDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const year = date.getFullYear();
        const m = date.getMonth();
        const month = m + 1;
        const day = date.getDate();
        const week = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        return formatStr.replace(/Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}/g, (match) => {
            switch (match) {
                case 'YY':
                    return year.toString().slice(-2);
                case 'YYY':
                case 'YYYY':
                    return year;
                case 'M':
                    return month;
                case 'MM':
                    return month >= 10 ? month : `0${month}`;
                case 'MMM':
                    return monthAbbreviation[m];
                case 'MMMM':
                    return monthFull[m];
                case 'D':
                    return day;
                case 'DD':
                    return day >= 10 ? day : `0${day}`;
                case 'd':
                    return week;
                case 'dd':
                    return weeks[week];
                case 'ddd':
                    return weeks[week];
                case 'dddd':
                    return weeksDay[week];
                case 'H':
                    return hour;
                case 'HH':
                    return hour >= 10 ? hour : `0${hour}`;
                case 'm':
                    return minute;
                case 'mm':
                    return minute >= 10 ? minute : `0${minute}`;
                case 's':
                    return second;
                case 'ss':
                    return second >= 10 ? second : `0${second}`;
                default:
                    return match;
            }
        });
    }
}