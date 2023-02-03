export function converterUnix(unix_timestamp: number) {

    let date = new Date(unix_timestamp * 1000);

    let hours = date.getHours();

    let minutes = "0" + date.getMinutes();

    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.slice(1)

    return formattedTime;
}