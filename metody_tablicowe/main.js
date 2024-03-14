let usersArr = [
	{
		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
		userName: 'Jasia',
		userCity: 'Gliwice',
		userAge: 16,	
	},
	{
		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
		userName: 'Michał',
		userCity: 'Zabrze',
		userAge: 19,
	},
	{
		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
		userName: 'Olga',
		userCity: 'Knurów',
		userAge: 23,
	},
	{
		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
		userName: 'Marek',
		userCity: 'Gliwice',
		userAge: 17,
	},
	{
		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
		userName: 'Józefa',
		userCity: 'Pyskowice',
		userAge: 42,
	},
	{
		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
		userName: 'Janek',
		userCity: 'Gliwice',
		userAge: 30,
	},
	{
		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
		userName: 'Hania',
		userCity: 'Toszek',
		userAge: 12,
	},
	{
		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
		userName: 'Benek',
		userCity: 'Warszawa',
		userAge: 45,
	},
	{
		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
		userName: 'Gosia',  
		userCity: 'Gliwice',
		userAge: 30,
	},
];

const nameInput = document.querySelector("#nameInput");
const cityInput = document.querySelector("#cityInput");
const ageInput = document.querySelector("#ageInput");   
const addBtn = document.querySelector("#addBtn");
const userListDisplay = document.querySelector("#userListDisplay");

addBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    userListDisplay.innerHTML = ''
    // userListDisplay.classList.add('hidden')

    usersArr.push({
        userID: crypto.randomUUID(),
		userName: nameInput.value,
		userCity: cityInput.value,
		userAge: ageInput.value,
    });

    usersArr.forEach(element => {
        const userListElement = document.createElement("li");
        userListElement.classList.add("list-group-item");
        userListElement.classList.add("d-flex");
        userListElement.classList.add("justify-content-between");
        userListElement.setAttribute("id",element.userID);  
        // userListElement.classList.add("row");

        userListElement.innerHTML = `<span><strong>${element.userName}</strong> 
                                lat <strong>${element.userAge}</strong> 
                                z miasta <strong>${element.userCity}</strong></span>

                                <button type="button" 
                                    class="btn btn-outline-danger p-1 position-relative" 
                                    id="${element.userID}" 
                                    onclick="userListDeleteBtn(this.parentNode)">
                                    X
                                </button>`

        userListDisplay.appendChild(userListElement);
    });
})

function userListDeleteBtn(el){
    var element = el;

    console.log(element.id)

    usersArr = usersArr.filter(elem => elem.userID!=element.id);

    element.remove();
}


const searchText = document.querySelector('#searchText')
const searchInput = document.querySelector('#searchInput');
const displaySearch = document.querySelector('#displaySearch');
const searchBtn = document.querySelector('#searchBtn');


searchBtn.addEventListener('click', ()=>{
    displaySearch.innerHTML = '';

    switch (searchInput.value){
        case "name":
            usersArr.forEach(element => {
                if(element.userName.toUpperCase().includes(searchText.value.toUpperCase())){
                    displaySearch.innerHTML += `<li><strong>${element.userName}</strong> 
                    lat <strong>${element.userAge}</strong> 
                    z miasta <strong>${element.userCity}</strong></li>`
                }
            })
            break;
            
        case "city":
            usersArr.forEach(element => {
                if(element.userCity.toUpperCase().includes(searchText.value.toUpperCase())){
                    displaySearch.innerHTML += `<li><strong>${element.userName}</strong> 
                    lat <strong>${element.userAge}</strong> 
                    z miasta <strong>${element.userCity}</strong></li>`
                }
            })
            break;
            
        case "age":
            usersArr.forEach(element => {
                if(element.userAge == searchText.value){
                    displaySearch.innerHTML += `<li><strong>${element.userName}</strong> 
                    lat <strong>${element.userAge}</strong> 
                    z miasta <strong>${element.userCity}</strong></li>`
                }
            })
            break;
            
    }
})

