import moment from 'moment';


export function converterUnixAndGetDate(unix_timestamp?: number) {
    let formattedTime
    if (unix_timestamp) {
        let date = new Date(unix_timestamp * 1000);

        let hours: any = date.getHours();

        if (hours < 10) {
            hours = '0' + hours
        }
        let minutes: any = "0" + date.getMinutes();

        if (minutes < 10) {
            minutes = '0' + hours
        }
        formattedTime = hours + ':' + minutes.slice(1)
    }
    const resultDate = moment().format("[Today is] dddd, D MMMM");


    return {formattedTime: formattedTime && formattedTime, date: resultDate};
}