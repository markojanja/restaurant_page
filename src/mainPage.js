import { createTextElement } from "./general";
import { loadMenu } from "./menuPage";

const createHome = () =>{
    
    const home = document.createElement('div')
    home.classList.add('home')
    const heading = document.createElement("h1")
    const copy = createTextElement('p', "Discover the Ultimate Spanish Dining Experience at Our Authentic Restaurant in Barcelona!")
    heading.textContent = 'El Jardín de España '
    const button = document.createElement('button')
    button.classList.add('main-btn')
    button.textContent = 'Menu'
    home.appendChild(heading)
    home.appendChild(copy)
    home.appendChild(button)

    return home
}

const handleMainBtn = (nav) =>{
    const mainBtn = document.querySelector('.main-btn')
    mainBtn.addEventListener('click',function(){         
        nav.forEach(btn => {
            if(btn.dataset.target === 'menu') {
                btn.classList.add("active")
            }else{
                btn.classList.remove("active")
            }
        })
        loadMenu()
    })
}

const loadHome = () =>{
    const main = document.getElementById('main')
    const navButtons = document.querySelectorAll('.nav-btn')   
    main.innerHTML = "";
    main.appendChild(createHome())
    navButtons[0].classList.add('active')
    handleMainBtn(navButtons)


}
export {loadHome}