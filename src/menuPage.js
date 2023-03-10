import { createTextElement,createImgElement } from "./general"
import { createMenuList } from "./menuItems"


const createMenu = ()=>{
    const menuTitle = createTextElement('h1',"Menu")
    const menuList1 = createMenuList()
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.appendChild(menuTitle)
    menuList1.map(item=>{
        menu.appendChild(card(item.title, item.desc,item.image))
    })

    return menu
}

const card = (title, text,img,alt) =>{
    const card = document.createElement('div')
    card.classList.add('card')
    card.appendChild(createImgElement(img))
    card.appendChild(createTextElement('h3',title))
    card.appendChild(createTextElement('p', text))

    return card
}


const loadMenu = ()=>{
    const main = document.getElementById('main')
    main.innerHTML = ""
    main.appendChild(createMenu())
}

export{loadMenu}