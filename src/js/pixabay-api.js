// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


function getImages(imgName) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: imgName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    }
    const PARAMS = new URLSearchParams(options);    
    const url = BASE_URL + END_POINT + '?' + PARAMS;

    return fetch(url, options)
        .then(res => {
            return res.json();
        })
}

getImages("flower").then(data => {
    console.log(data);
})
