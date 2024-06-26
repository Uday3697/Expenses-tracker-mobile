export function getFormattedDate(date) {
    return date.toISOString().slice(0.10)
}


export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

// export function getDateMinusDays(date, days) {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() - days);
//     return newDate;
// }