export function getImages(pageNumber) {
    const promiseMy = $.ajax(`https://repetitora.net/api/JS/Images/?page=${pageNumber}&count=1`);
    return promiseMy;
}

export function getTasks(pageNumber) {
    const promiseMy = $.ajax(`https://repetitora.net/api/JS/Tasks/?widgetId=45`);
    return promiseMy.then(data => data);
}

export function createTask(title) {
    const prom = $.ajax({
        type: "POST",
        url: `https://repetitora.net/api/JS/Tasks/`,
        data: {
            widgetId: 55,
            title: title
        }
    });

    return prom.then(data => data);
}




