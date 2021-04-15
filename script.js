let cashback = 5
let PIN = 7777
let night_mode = false

let transactions = [
    {
        id: Math.random().toString().substr(2, 10),
        money: 20000,
        service: Number,
        time: new Date().toLocaleTimeString(),
        date: new Date()
    }
]

let service = [
    {
        id: Math.random().toString().substr(2, 10),
        title: "Питание",
        comission: 3,
        money: 0,
        cashback: 1,
    }
]

let income = [
    {
        id: Math.random().toString().substr(2, 10),
        name: String,
        money: Number
    },
]

let cards = [
    // {
    //     id: Math.random().toString().substr(2, 10),
    //     number: 4278330011240033,
    //     name: 'Main Card',
    //     expirationYear: 2025,
    //     expirationMonth: 04,
    //     type: {
    //         visa: true,
    //         master: false,
    //         humo: false,
    //         uzcard: false
    //     },
    //     balance: 12000
    // }
]

// Цвета фона
// div.style.bgColor = 'url(' + item.img + ')'
let corporations = [
    {
        name: 'VISA',
        num: 4278,
        img: 'https://www.flaticon.com/svg/vstatic/svg/196/196578.svg?token=exp=1616414692~hmac=830f09f5219af38c246fb57934b6795f'
    },
    {
        name: 'Mastercard',
        num: 1234,
        img: 'https://www.flaticon.com/svg/vstatic/svg/196/196578.svg?token=exp=1616414692~hmac=830f09f5219af38c246fb57934b6795f'
    },
    {
        name: 'Uzcard',
        num: 8600,
        img: 'https://www.flaticon.com/svg/vstatic/svg/196/196578.svg?token=exp=1616414692~hmac=830f09f5219af38c246fb57934b6795f'
    },
    {
        name: 'HUMO',
        num: 9860,
        img: 'https://www.flaticon.com/svg/vstatic/svg/196/196578.svg?token=exp=1616414692~hmac=830f09f5219af38c246fb57934b6795f'
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

    // card.name = form_data.children[0].value.trim()
    // card.number = form_data.children[1].value.trim()

    let find = corporations.filter(item => item.num.toString() == card.number)

    // if(find[0].name && card.number.length <= 16) {
        let card = {
            // Добавление на автомате
            id: Math.random().toString().substr(2, 10),
            balance: 0,
            type: Object,

            // Добавляем информацию вручную
            name: form_data.children[0].value.trim(),
            number: form_data.children[1].value.trim(),
            img: find[0].img
        }

        // console.log(card)
        // // JS
        // cards.push(card)
        // card.img = find[0].img

        // // HTML
        // let el_cards = document.querySelector('.cards').children[0].cloneNode(true)
        
        // el_cards.children[0].children[1].innerText = card.number
        // el_cards.children[1].children[0].innerText = card.balance
        // el_cards.children[1].children[1].innerText = card.name
        // // el_cards.children[0].children[0].classList.add(card.name)
        // el_cards.children[0].children[0].style.backgroundImage = `url(${card.img})`

        // document.querySelector('.cards').append(el_cards)

    // } else {
    //     alert('Карта не действительна')
    // }
}




