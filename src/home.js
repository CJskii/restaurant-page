import cake from './assets/btc-cake-removebg-preview.png'

export default function Home(){
    const home = document.createElement('div')
    home.classList.add('main')
    home.appendChild(h4())
    home.appendChild(paragrap())
    home.appendChild(image())
    return home
}

function h4() {
    const h4 = document.createElement('h4')
    const spanColor = document.createElement('span')
    const span = document.createElement('span')
    spanColor.classList.add('title')
    spanColor.textContent = "₿"
    span.textContent = "itcoin"
    h4.appendChild(spanColor)
    h4.appendChild(span)
    return h4
}

function paragrap(){
    let p = document.createElement('p')
    let spanColor = document.createElement('span')
    let span = document.createElement('span')
    spanColor.classList.add('title')
    spanColor.textContent = "Hash bakery"
    span.textContent = " has the best cakes with crypto themes, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laboriosam quaerat blanditiis fugit deleniti sapiente totam officiis, ut quasi vero velit recusandae sunt quas adipisci quisquam in nostrum dolorem pariatur."
    p.appendChild(spanColor)
    p.appendChild(span)
    return p
}

function image(){
    const img = document.createElement('img')
    img.src = cake
    img.classList.add('home-img')

    return img
}