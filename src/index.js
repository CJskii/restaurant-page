import _ from "lodash";
import './style.css';
import Home from "./home";
import component from "./header"

document.addEventListener('DOMContentLoaded', function(){
    let content = document.querySelector('.content')
    content.appendChild(component());
})

document.addEventListener('DOMContentLoaded', function(){
    let content = document.querySelector('.content')
    content.appendChild(Home());
})



