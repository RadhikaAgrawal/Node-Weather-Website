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
    const url = '/weather?address='+location;

    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
        }else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast; 
        }
    })
})
})