let cashback = 5
let PIN = 7777
let night_mode = false

let transactions = [{
    id: Math.random().toString().substr(2, 10),
    money: 20000,
    service: Number,
    time: new Date().toLocaleTimeString(),
    date: new Date()
}]

let service = [{
    id: Math.random().toString().substr(2, 10),
    title: "Питание",
    comission: 3,
    money: 0,
    cashback: 1,
}]

let income = [{
    id: Math.random().toString().substr(2, 10),
    name: String,
    money: Number
}, ]

let cards = []

let card = {
    id: Math.random().toString().substr(2, 10),
    number: Number,
    name: String,
    balance: 0,
    type: Object,
    img: String
}

// Цвета фона
let corporations = [{
        name: 'VISA',
        num: 4278,
        img: 'https://www.flaticon.com/premium-icon/icons/svg/368/368450.svg'
    },
    {
        name: 'Mastercard',
        num: 1234,
        img: 'https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-256.png'
    },
    {
        name: 'Uzcard',
        num: 8600,
        img: 'https://ipak.uzex.uz/images/partners/uzcard.png'
    },
    {
        name: 'HUMO',
        num: 9860,
        img: 'https://humocard.uz/bitrix/templates/main/img/card2.png'
    },
]

// Показываем форму
let show_form = document.querySelector('button.show_form')
let remove_form = document.querySelector('button.remove_form')
let form = document.querySelector('.add_form')
let form_data = document.querySelector('form .data')

show_form.onclick = () => {
    event.preventDefault()
    form.classList.add('active')
}

// Отправить данные
remove_form.onclick = () => {
    event.preventDefault()

    card.name = form_data.children[0].value.trim()
    card.number = form_data.children[1].value.trim()

    let find = corporations.filter(item => item.num.toString() == card.number)

    if (find[0].name && card.number.length <= 16) {
        // JS
        cards.push(card)
        card.img = find[0].img

        // HTML
        let el_cards = document.querySelector('.cards').children[0].cloneNode(true)

        el_cards.children[0].children[1].innerText = card.number
        el_cards.children[1].children[0].innerText = card.balance
        el_cards.children[1].children[1].innerText = card.name
        // el_cards.children[0].children[0].classList.add(card.name)
        el_cards.children[0].children[0].style.backgroundImage = `url(${card.img})`

        document.querySelector('.cards').append(el_cards)

    } else {
        alert('Карта не действительна')
    }
}

// Валидация добавленной карты
for (let item of corporations) {
    if (item.num.toString() == card.number.toString().substr(0, 4)) {

        cards.push({
            id: Math.random().toString().substr(2, 10),
            number: card.number,
            name: card.name,
            balance: card.balance,
            corporation: item.name
        })

        // Показываем карту на странице
        let el_cards = document.querySelector('.cards')

        el_cards.children[0].children[0].children[1].innerText = card.number
        el_cards.children[0].children[1].children[0].innerText = card.balance
        el_cards.children[0].children[1].children[1].innerText = card.name
        el_cards.children[0].children[0].children[0].classList.add(item.name)
    } else {
        console.log('Карта недействительна')
    }
}