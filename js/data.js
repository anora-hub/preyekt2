function getData(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/${url}`)
    request.send()

    request.onreadystatechange = function () {
        console.log(request.status);
        console.log(request.readyState);

        if (request.status === 200 && request.readyState === 4) {
            let data = request.response;
            let datas = JSON.parse(data)
            console.log(datas);
            callback(datas)
        }
    }
}



function getSingleData(url, id , callback) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/${url}/${id}`)
    request.send()

    request.onreadystatechange = function () {
        console.log(request.status);
        console.log(request.readyState);

        if (request.status === 200 && request.readyState === 4) {
            let data = request.response;
            let datas = JSON.parse(data)
            console.log(datas);
            callback(datas)
        }
    }
}