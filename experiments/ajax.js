const numberButton = document.getElementById("number");
const chuckButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

const numberURL = 'http://numbersapi.com/random';
const chuckURL = 'https://api.chucknorris.io/jokes/random';

numberButton.addEventListener('click', () => {
    fetch(numberURL)
    .then( response => {
        outputDiv.innerHTML = "Waiting for response ...";
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.text())
    .then( text => outputDiv.innerText = text)
    .catch(error => console.log('There was an error:', error))
}, false);

chuckButton.addEventListener('click', () => {
    fetch(chuckURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response ...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.json())
    .then( data => outputDiv.innerText = data.value)
    .catch( error => console.log('There was an error:', error))
}, false);