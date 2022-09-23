import btccake from './assets/btc-cake.jpg'
import ethcake from './assets/eth-cake.jpg'
//import btccupcake from './assets/btc-cupcake.webp'

export default function Menu(){
    const menu = document.createElement('div')
    menu.classList.add('main-menu')
    menu.appendChild(item1())
    menu.appendChild(item2())
    menu.appendChild(item3())
    menu.appendChild(item4())
    menu.appendChild(item5())
    menu.appendChild(item6())
    return menu
}

// Card 1

function item1(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item1"
    card.appendChild(header)
    card.appendChild(image1())
    card.appendChild(paragraph1())
    return card
}

function image1(){
    const img = document.createElement('img')
    img.src = btccake
    img.classList.add('menu-img')
    return img
}

function paragraph1(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "BTC birthday cake"
    price.textContent = "99.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}

// Card 2

function item2(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item2"
    card.appendChild(header)
    card.appendChild(image2())
    card.appendChild(paragraph2())
    return card
}

function image2(){
    const img = document.createElement('img')
    img.src = ethcake
    img.classList.add('menu-img')
    return img
}

function paragraph2(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "ETH birthday cake"
    price.textContent = "79.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}

// Card 3

function item3(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item3"
    card.appendChild(header)
    card.appendChild(image3())
    card.appendChild(paragraph3())
    return card
}

function image3(){
    const img = document.createElement('img')
    img.src = btccake
    img.classList.add('menu-img')
    return img
}

function paragraph3(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "ETH birthday cake"
    price.textContent = "99.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}

// Card 4

function item4(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item4"
    card.appendChild(header)
    card.appendChild(image4())
    card.appendChild(paragraph4())
    return card
}

function image4(){
    const img = document.createElement('img')
    img.src = ethcake
    img.classList.add('menu-img')
    return img
}

function paragraph4(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "BTC birthday cake"
    price.textContent = "79.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}

// Card 5

function item5(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item5"
    card.appendChild(header)
    card.appendChild(image5())
    card.appendChild(paragraph5())
    return card
}

function image5(){
    const img = document.createElement('img')
    img.src = btccake
    img.classList.add('menu-img')
    return img
}

function paragraph5(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "BTC birthday cake"
    price.textContent = "99.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}

// Card 6

function item6(){
    const card = document.createElement('div')
    const header = document.createElement('h6')
    card.classList.add('card')
    header.textContent = "Item6"
    card.appendChild(header)
    card.appendChild(image6())
    card.appendChild(paragraph6())
    return card
}

function image6(){
    const img = document.createElement('img')
    img.src = ethcake
    img.classList.add('menu-img')
    return img
}

function paragraph6(){
    const text = document.createElement('div')
    text.classList = "card-footer"
    const p = document.createElement('p')
    const price = document.createElement('span')
    p.textContent = "BTC birthday cake"
    price.textContent = "79.99$"
    text.appendChild(p)
    text.appendChild(price)
    return text
}