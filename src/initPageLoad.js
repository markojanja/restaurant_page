//create nav and nav links
const navbar = () =>{
    const nav = document.createElement('nav')
    const navLinkContiner =  document.createElement('ul')
    const navLinkHome = document.createElement('li')
    const navLinkMenu = document.createElement('li')
    const navLinkAbout = document.createElement('li')

    nav.appendChild(navLinkContiner)

    navLinkContiner.appendChild(navLinkHome)
    navLinkContiner.appendChild(navLinkMenu)
    navLinkContiner.appendChild(navLinkAbout)

    navLinkHome.textContent = 'Home';
    navLinkMenu.textContent = 'Menu';
    navLinkAbout.textContent = 'About';

    return nav
}

//create main section
const main = ""
//create footer

const footer = ''



const initPageLoad = ()=>{
    const content = document.getElementById('content')
    content.appendChild(navbar())
}
export {initPageLoad}