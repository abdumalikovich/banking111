let arr_cards = [
    
]

let cards = document.querySelector('.cards')

// Функция для добавления/удаления/изменения карт
let add_new_card = () => {
    cards.innerHTML = ''

    for(let item of arr_cards) {
        // Создание карточки
        let cr_div = document.createElement('div')
            cr_div.classList.add('item')
        let cr_div_top = document.createElement('div')
            cr_div_top.classList.add('top_card')
        let cr_div_top_print = document.createElement('div')
            cr_div_top_print.classList.add('print')
        let cr_div_top_num = document.createElement('div')
            cr_div_top_num.classList.add('num')
            cr_div_top_num.innerText = item.number
        let cr_div_bottom = document.createElement('div')
            cr_div_bottom.classList.add('bottom-card')
        let cr_div_bottom_h1 = document.createElement('h1')
            cr_div_bottom_h1.innerText = item.balance
        let cr_div_bottom_h4 = document.createElement('h4')
            cr_div_bottom_h1.innerText = item.name
        
        cards.append(cr_div)
        cr_div.append(cr_div_top)
        cr_div.append(cr_div_bottom)
        
        cr_div_top.append(cr_div_top_print)
        cr_div_top.append(cr_div_top_num)
        cr_div_bottom.append(cr_div_bottom_h1)
        cr_div_bottom.append(cr_div_bottom_h4)
    }
}

// Работа с формами
let form_add_form = document.querySelector('.add_form')
// Открытие модального окна формы
let btn_show_form = document.querySelector('.show_form')
let btn_remove_form = document.querySelector('.remove_form')

btn_show_form.onclick = () => {
    event.preventDefault()

    form_add_form.classList.add('active')
}

// Сохранение информации и закрытие модального окна формы
form_add_form.onsubmit = () => {
    event.preventDefault()

    // * Добавление без валидации
    let formData = new FormData(form_add_form)
    let new_card = {}

    // Значение по умолчанию
    new_card.id = Math.random().toString().substr(2, 10)
    new_card.balance = 0

    // Автоматическое добавление из формы
    formData.forEach((value, key) => {
        new_card[key] = value
    })
    
    arr_cards.unshift(new_card)
    add_new_card()

    console.log(arr_cards)
}



