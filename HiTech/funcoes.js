const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input =  document.getElementById('nomeEmpresa');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

var placesAutocomplete = places({
    appId: 'pl6B7D0HC9AF',
    apiKey: 'f521449efbce3e112fa05484425ef144',
    container: document.querySelector('#address-input')
  });

  var app = new Vue({
    el: '#app',
    data: {
      titulo: 'HiTech - Test',
      mensagem: ''
    }
  })