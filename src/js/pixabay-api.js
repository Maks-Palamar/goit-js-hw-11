// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import renderCard from './render-functions.js';

const form = document.querySelector('.form');

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
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = event.target.elements.search.value;

if (userInput === "") {
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'bottomRight'
        });
        return;
    }

    getImages(userInput)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight'
                })
            } else {
                renderCard(data.hits);
            }
        })
        .catch(error => {
            console.log(error);
        })
})


