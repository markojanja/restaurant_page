import { createTextElement } from "./general"

const createAbout = ()=>{
    //TODO
    //create about section 
    const about = document.createElement('div')
    about.classList.add('about')
    const aboutTitle = createTextElement('h1','About Us')
    const paragraph1 =  createTextElement("p","Welcome to our authentic Spanish restaurant, located in the heart of Barcelona. We have been serving traditional Catalan and Spanish cuisine for over 20 years, using only the freshest ingredients sourced straight from the local markets. Our menu features a wide variety of dishes from paella to botifarra, and our skilled chefs are dedicated to ensuring that each dish is cooked to perfection.")
    const paragraph2 = createTextElement('p', "We believe that dining should be an experience, not just a meal. That's why we've created a cozy and charming atmosphere in our restaurant that will make you feel like you're in the streets of Barcelona. Whether you're celebrating a special occasion or just looking for a casual meal, we're sure you'll enjoy our warm hospitality and delicious food.")
    const paragraph3 = createTextElement("p", "We also offer a variety of options for those with dietary restrictions, such as gluten-free options, so everyone can enjoy our delicious food. Our restaurant also have a bar area where you can enjoy a variety of Spanish wines, sherries and cava.")
    const paragraph4 = createTextElement("p", "We are passionate about sharing our love of Spanish and Catalan cuisine with our customers and we hope you'll come dine with us soon! Enjoy the true taste of Barcelona in our restaurant.")
    about.appendChild(aboutTitle)
    about.appendChild(paragraph1)
    about.appendChild(paragraph2)
    about.appendChild(paragraph3)
    about.appendChild(paragraph4)

    return about
}

const loadAbout = ()=>{
    const main = document.getElementById('main')
    main.innerHTML = ""
    main.appendChild(createAbout())
}


export{loadAbout}