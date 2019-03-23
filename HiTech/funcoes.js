const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.getElementById('limpar');
const input = document.getElementById('item');
const localizacao = document.getElementById('address-input');
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
  itemsArray.push(JSON.stringify({nome: input.value, endereco: localizacao.value}));
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(JSON.stringify({nome: input.value, endereco: localizacao.value}));
  input.value = "";
  localizacao.value = "";
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