
export default function component() {
    const mainWrapper = document.querySelector('.content')
    mainWrapper.appendChild(Header())
    mainWrapper.appendChild(Nav())
    return mainWrapper;
  }
  
function Header(){
    const header = document.createElement('div')
    header.appendChild(Title())
    header.classList.add('header')
    return header
}

function Title(){
    const h1 = document.createElement('h1')
    const spanColor = document.createElement('span') 
    const span = document.createElement('span')
    spanColor.classList.add('title')   
    spanColor.textContent = "Hash"
    span.textContent = " bakery"
    h1.appendChild(spanColor)
    h1.appendChild(span)

    return h1
}

function Nav(){
    const nav = document.createElement('div')
    nav.classList.add('nav')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const aboutBtn = document.createElement('button')
    homeBtn.textContent = "Home"
    menuBtn.textContent = "Menu"
    aboutBtn.textContent = "About"
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(aboutBtn)
    return nav
}