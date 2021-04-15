let arr_cards = [];

let cards = document.querySelector(".cards");

let deleteCard = () => {
	let et = event.target
	let id = et.parentElement.getAttribute('id')
	let find = arr_cards.filter(item => item.id === id)
	arr_cards.splice(arr_cards.indexOf(find) - 1, 1)

	reload_card()
}

let reload_card = () => {
	cards.innerHTML = "";

	for (let item_2 of arr_cards) {
		// Создание карточки
		let cr_div = document.createElement("div");
		let cr_div_top = document.createElement("div");
		let cr_div_top_print = document.createElement("div");
		let cr_div_top_button = document.createElement("div")
		let cr_div_top_num = document.createElement("div");
		let cr_div_bottom = document.createElement("div");
		let cr_div_bottom_h1 = document.createElement("h1");
		let cr_div_bottom_h4 = document.createElement("h4");
		let cr_div_bottom_month_year = document.createElement("div")
		let cr_div_bottom_month_year_chertochka = document.createElement("h2")
		let cr_div_bottom_h2 = document.createElement("h2")
		let cr_div_bottom_h2_2 = document.createElement("h2")
		
		cr_div.classList.add("item");
		cr_div_top.classList.add("top_card");
		cr_div_top_print.classList.add("print");
		cr_div_top_button.classList.add("delete_butt")
		cr_div_top_num.classList.add("num");
		cr_div_bottom.classList.add("bottom-card");
		
		cr_div.setAttribute("id", item_2.id)
		cr_div_top_button.setAttribute("onclick", "deleteCard()")

		cr_div_top_num.innerText = item_2.number;
		cr_div_bottom_h1.innerText = item_2.name;
		cr_div_bottom_h4.innerText = item_2.balance;
		cr_div_bottom_month_year.classList.add("cr_div_bottom_month_year")
		cr_div_bottom_month_year_chertochka.innerText = "/"
		cr_div_bottom_h2.innerText = item_2.month
		cr_div_bottom_h2_2.innerText = item_2.year

		cards.append(cr_div);
		cr_div.append(cr_div_top);
		cr_div.append(cr_div_bottom);
		cr_div_top.append(cr_div_top_print);
		cr_div_top.append(cr_div_top_num);
		cr_div_bottom.append(cr_div_bottom_h1);
		cr_div_bottom.append(cr_div_bottom_h4);
		cr_div_bottom.append(cr_div_bottom_month_year);
		cr_div_bottom_month_year.append(cr_div_bottom_h2)
		cr_div_bottom_month_year.append(cr_div_bottom_month_year_chertochka)
		cr_div_bottom_month_year.append(cr_div_bottom_h2_2);
		cr_div_bottom.append(cr_div_top_button);
	}

};

// Цвета фона
let corporations = [
	{
		name: "VISA",
		num: 4278,
		img: "",
	},
	{
		name: "Mastercard",
		num: 1234,
		img: "",
	},
	{
		name: "Uzcard",
		num: 8600,
		img: "",
	},
	{
		name: "HUMO",
		num: 9860,
		img: "",
	},
];



// Функция для добавления/удаления/изменения карт


// Работа с формами
let form_add_form = document.querySelector(".add");
let form_add_transactions = document.querySelector(".add_transactions");

// Открытие модельного окна формы
let show_form = document.querySelector(".show_form");
let remove_form = document.querySelector(".remove_form");

show_form.onclick = () => {
	event.preventDefault();

	form_add_form.classList.add("active")
};

form_add_form.onsubmit = () => {
	event.preventDefault();
	let start = document.querySelector(".data")

	for (let item of corporations) {
		if (
			item.num.toString() == start.children[1].value.substr(0, 4) &&
			start.children[0].value !== "" &&
			start.children[1].value.length <= 16
		) {
			let formData = new FormData(form_add_form);
			let new_card = {};
			//Значение по умолчанию
			new_card.id = Math.random().toString().substr(2, 10);
			new_card.balance = 0;

			//Автоматическое добавление из формы
			formData.forEach((value, key) => {
				new_card[key] = value;
			});


			arr_cards.unshift(new_card);

			reload_card()
			let icon = document.querySelector('.print')
			icon.classList.add(item.name)


			console.log(arr_cards);
			// start.children[0].value = "";
			// start.children[1].value = "";
			form_add_form.classList.remove("active");
		} else if (start.children[0].value == "Шахзод") {
			let main = document.querySelector("main");
			let new_div = document.createElement("div");
			new_div.classList.add("easterEgg");
			main.append(new_div);
			form_add_form.classList.remove("active");
		} else console.log("Карта не действительна");
	}
}

let show_service_form = () => {
	event.preventDefault()

	// Показываем форму
	form_add_transactions.classList.add('active')
	// Селекты с картами
	let card_select = document.querySelector('.add_transactions .card_select')
	
	// Добавляем несколько option из массива с картами
	for(let item of arr_cards) {
		// Клонируем один option
		let card_option = form_add_transactions.children[1].children[0].children[0].cloneNode(true)
		
		// Заменяем имя карты
		card_option.innerText = item.name
		card_option.setAttribute('value', item.id)
		// Добавляем внутрь select
		card_select.append(card_option)
	}
}

let cards_1 = [];

let card = {
	id: Math.random().toString().substr(2, 10),
	number: Number,
	name: String,
	balance: 0,
	type: Object,
	img: String,
};

// Модальное окно с услугуми
// let add_transactions = document.querySelector('.add_transactions')


