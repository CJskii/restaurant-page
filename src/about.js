export default function About(){
    const about = document.createElement('div')
    about.classList.add('main-about')
    about.appendChild(header())
    about.appendChild(text())
    about.appendChild(contact())
    return about
}

function header(){
    const header = document.createElement('h4')
    header.textContent = "About"
    return header
}

function text(){
    const p = document.createElement('p')
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return p
}

function contact(){
    const container = document.createElement('div')
    let p = document.createElement('p')
    let number = document.createElement('span')
    container.classList.add('contact')
    p.textContent = "Call us now!"
    number.textContent = "+ 44 712 989 9991"
    container.appendChild(p)
    container.appendChild(number)
    return container    
}
