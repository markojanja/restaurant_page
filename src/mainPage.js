import { createTextElement } from "./general";

const createHome = () =>{
    
    const home = document.createElement('div')
    home.classList.add('home')
    const heading = document.createElement("h1")
    const copy = createTextElement('p', "Discover the Ultimate Spanish Dining Experience at Our Authentic Restaurant in Barcelona!")
    heading.textContent = 'El Jardín de España '
    home.appendChild(heading)
    home.appendChild(copy)
    return home
}

const loadHome = () =>{
    const main = document.getElementById('main')
    main.innerHTML = "";
    main.appendChild(createHome())
}
export {loadHome}