let get = document.querySelector("#get-data");
let send = document.querySelector("#send-data");
let del = document.querySelector("#del-data");

const makeDatareq = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("I_LOVE_JS", "TRUE");
        xhr.send();

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject("Network Specific error occured!");
        }
    })
}

const getData = () => {
    makeDatareq('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
            console.log(res);
        })
}
const delData = () => {
    makeDatareq('DELETE', 'https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
            console.log(res);
        })
}
const sendData = () => {
    makeDatareq('POST', 'https://jsonplaceholder.typicode.com/todos', JSON.stringify(
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          }
    ))
    .then((res) => {
        console.log(res);
    })
}

get.addEventListener('click', getData);
send.addEventListener('click', sendData);
del.addEventListener('click', delData);