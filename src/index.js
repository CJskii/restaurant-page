import _ from "lodash";
import './style.css';
import Home from "./home";
import component from "./header"
import About from "./about"
import Menu from "./menu"

document.addEventListener('DOMContentLoaded', function(){
    const content = document.querySelector('.content')
    document.body.appendChild(component());
    content.appendChild(Home());

    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', function(){
            const button = this.textContent
            console.log(button)
            content.lastElementChild.remove()
            if (button == 'Home'){
                content.appendChild(Home())
                console.log("Home loaded")
            } else if (button == "Menu"){
                console.log("Menu Loaded")
                content.appendChild(Menu())
            } else if (button == "About"){
                console.log("About Loaded")
                content.appendChild(About())
            }
            
        })
    })
})



