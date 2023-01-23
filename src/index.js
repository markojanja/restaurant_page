//create nav and nav links
import { loadHome } from "./mainPage"
import { loadAbout } from "./aboutPage"
import { loadMenu } from "./menuPage"
const CreateNavbar = () =>{
    const nav = document.createElement('nav')
    const navLinks =  document.createElement('ul')
    const navLinkHome = document.createElement('li')
    navLinkHome.classList.add('nav-btn')
    navLinkHome.setAttribute('data-target', 'home')
    const navLinkMenu = document.createElement('li')
    navLinkMenu.classList.add('nav-btn')
    navLinkMenu.setAttribute('data-target', 'menu')
    const navLinkAbout = document.createElement('li')
    navLinkAbout.classList.add('nav-btn')
    navLinkAbout.setAttribute('data-target', 'about')

    nav.appendChild(navLinks)

    navLinks.appendChild(navLinkHome)
    navLinks.appendChild(navLinkMenu)
    navLinks.appendChild(navLinkAbout)

    navLinkHome.textContent = 'Home';
    navLinkMenu.textContent = 'Menu';
    navLinkAbout.textContent = 'About Us';

    return nav
}
const CreateMain = ()=>{
    const main = document.createElement('main')
    main.setAttribute("id",'main')
    return main
}

//create footer
const CreateFooter = ()=>{
    const footer = document.createElement('footer')
    const paragraph = document.createElement("p")
    paragraph.textContent = 'Copywrite \u00A9 2023 MarkoJanja '
    footer.appendChild(paragraph)


    return footer
}


const initWebsite = (()=>{
    const content = document.getElementById('content')
    content.appendChild(CreateNavbar())
    content.appendChild(CreateMain())
    loadHome()
    content.appendChild(CreateFooter())
})()

const handlePages = (()=>{
    const navBtns = document.querySelectorAll('.nav-btn')
    navBtns.forEach((btn)=>{
        btn.addEventListener('click', function(){
            switch(btn.dataset.target){
                case "home":
                    loadHome()
                    setActive(btn)
                    break;
                case "about":
                    loadAbout()
                    setActive(btn)
                    break
                case 'menu':
                    loadMenu()
                    setActive(btn)
                    break    
                default:
                    console.log('hola');
            }
            
        })
        
    })
})()

function setActive(button){
    const buttons = document.querySelectorAll('.nav-btn')

    buttons.forEach((btn) =>{
        if(btn!==this)  btn.classList.remove('active')
    })
    button.classList.add('active')
}