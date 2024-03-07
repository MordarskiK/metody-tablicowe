const userArr = [
    {name: 'Jasia', city: 'Gliwice', age: 16},
    {name: 'Michał', city: 'Zabrze', age: 27},
    {name: 'Olga', city: 'Knurów', age: 41},
    {name: 'Marek', city: 'Bytom', age: 32},
    {name: 'Józefa', city: 'Warszawa', age: 68},
    {name: 'Kuba', city: 'Olsztyn', age: 12},
    {name: 'Stasiek', city: 'Gliwice', age: 22},
    {name: 'Kuba', city: 'Gdańsk', age: 19},
    {name: 'Paweł', city: 'Kraków', age: 54},
    {name: 'Zuzia', city: 'Kraków', age: 43},
];

const nameInput = document.querySelector("#nameInput");
const cityInput = document.querySelector("#cityInput");
const ageInput = document.querySelector("#ageInput");   
const addBtn = document.querySelector("#addBtn");
const userListDisplay = document.querySelector("#userListDisplay");

addBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    userListDisplay.innerHTML = ''
    userListDisplay.classList.add('hidden')

    userArr.forEach(element => {
        const userListElement = document.createElement("li");
        userListElement.classList.add("list-group-item");
        const userListDeleteBtn = 

        userListElement.innerHTML = `<strong>${element.name}</strong> lat <strong>${element.age}</strong> z miasta <strong>${element.city}</strong>
        <button type="button" class="btn btn-outline-danger p-1 position-relative">X</button>`

        userListDisplay.appendChild(userListElement);
    });
})


const search = document.querySelector('#search');
const changeInput = document.querySelector('#changeInput');
const displaySearch = document.querySelector('#displaySearch');
const searchBtn = document.querySelector('#searchBtn');

function properInputType(){
    if(search.value=="name" || search.value=="city"){
        changeInput.type="text";
    }
    else{
        changeInput.type="number";
    }
}

search.addEventListener('change', properInputType)

searchBtn.addEventListener('click', ()=>{
    displaySearch.innerHTML = '';
    displaySearch.classList.add('hidden')

    switch (search.value){
        case "name":
            userArr.forEach(element => {
                if(element.name == changeInput.value){
                    displaySearch.innerHTML += `<li>${element.name}, ${element.city}, ${element.age} lat</li>`
                }
            });
            displaySearch.classList.remove('hidden');

        case "city":
            userArr.forEach(element => {
                if(element.city == changeInput.value){
                    displaySearch.innerHTML += `<li>${element.name}, ${element.city}, ${element.age} lat</li>`
                }
            });
            displaySearch.classList.remove('hidden');

        case "age":
            userArr.forEach(element => {
                if(element.age == changeInput.value){
                    displaySearch.innerHTML += `<li>${element.name}, ${element.city}, ${element.age} lat</li>`
                }
            });
            displaySearch.classList.remove('hidden');
    }
})

