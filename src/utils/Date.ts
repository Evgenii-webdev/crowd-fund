import moment from 'moment';

export const Date2Moment: (date: Date) => moment.Moment = (date: Date) => moment([
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
]);
export const Moment2Date: (mom: moment.Moment) => Date = (mom) => mom.toDate();

export const FromNow: (date: Date) => string = (date) => {

    const mom: moment.Moment = Date2Moment(date);
    return mom.fromNow();
    // return mom.fromNow();
    // const moment2: moment.Moment = Date2Moment(date2);
    // let diff: number = parseInt(((date1.getTime() - date2.getTime()) / 1000).toString());
    // let result = '';
    // if (diff < 60) {
    //     return diff + ' seconds ago';
    // }

    // diff = parseInt((diff / 60).toString());
    // if (diff < 60) {
    //     return diff + ' minutes ago';
    // }

    // diff = parseInt((diff / 60).toString());
    // if (diff < 24) {
    //     return diff + ' hours ago';
    // }

    // diff = parseInt((diff / 24).toString());
    // if (diff < 24) {
    //     return diff + ' hours ago';
    // }

    // return '';
}