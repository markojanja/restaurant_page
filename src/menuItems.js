class MenuItem{
    constructor(title,desc,image){
        this.title = title
        this.title = desc
        this.image = image
    }
}



const createMenuList=()=>{
    
    const menuItem1 = new MenuItem()
    menuItem1.title = "Paella"
    menuItem1.desc = "A traditional Valencian dish made with saffron, rice, vegetables, and meat or seafood. The dish is cooked in a wide, shallow pan called a paellera, and is typically made with chicken, rabbit, and snails. The rice is cooked in chicken or fish stock and saffron, and is typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans."
    menuItem1.image = './assets/paella.jpg'

    const menuItem2 = new MenuItem()
    menuItem2.title = "Escalivada"
    menuItem2.desc = "Grilled vegetables, such as eggplant, bell peppers, and onions, are the main ingredient of this traditional Catalan dish. The vegetables are cooked over an open flame until they are tender and slightly charred. They are then peeled and sliced, and served with anchovies. The dish is typically served cold and is often accompanied by bread."
    menuItem2.image = './assets/escalivada.jpg'

    const menuItem3 = new MenuItem()
    menuItem3.title = "Fideuà"
    menuItem3.desc = "A noodle dish similar to paella, but made with short, thin noodles instead of rice. The dish is typically made with seafood, such as squid, shrimp, and mussels. The noodles are cooked in fish or seafood stock, and are typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans."
    menuItem3.image = './assets/Fideua.jpg'

    const menuItem4 = new MenuItem()
    menuItem4.title = "Botifarra amb mongetes"
    menuItem4.desc = "A traditional Catalan dish consisting of grilled sausages served with white beans. The sausages are made with pork and typically seasoned with spices, such as black pepper, paprika, and cumin. The white beans are cooked with garlic and onion, and are typically served in a casserole dish."
    menuItem4.image = './assets/Botafire.jpg'

    const menuItem5 = new MenuItem()
    menuItem5.title = "Calçots amb romesco"
    menuItem5.desc = "A traditional Catalan dish of grilled green onions, often served with a spicy red pepper and almond sauce. Calçots are a type of green onion that are typically grilled over an open flame until they are tender and slightly charred. They are served with a sauce made from red peppers, tomatoes, bread, almonds and olive oil, called Romesco sauce."
    menuItem5.image = './assets/calc.jpg'

    const menuItem6 = new MenuItem()
    menuItem6.title = "Esqueixada"
    menuItem6.desc = "A traditional Catalan salad made with salt cod, tomatoes, onions, and olives. The salt cod is soaked in water for several hours to remove the salt, then flaked and mixed with the tomatoes, onions, and olives. The salad is typically dressed with olive oil and vinegar, and is often garnished with parsley."
    menuItem6.image = './assets/Ex.jpg'
    
    
    const menuList = [menuItem2,menuItem6, menuItem1, menuItem3, menuItem4, menuItem5]

    return menuList
}

export {createMenuList}

