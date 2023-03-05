console.log('Client Side JS loaded');


const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const location = searchElement.value;
    const url = 'http://127.0.0.1:3000/weather?address='+location;

    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
        }else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast.weather_descriptions; 
        }
    })
})
})