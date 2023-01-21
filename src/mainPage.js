const createHome = () =>{
    
    const home = document.createElement('div')
    const heading = document.createElement("h1")
    home.style.background = "url('./assets/banner.jpg') no-repeat center center / cover";
    heading.textContent = 'My awesome website '
    home.appendChild(heading)
    return home
}

const loadHome = () =>{
    const main = document.getElementById('main')
    main.innerHTML = "";
    main.appendChild(createHome())
}
export {loadHome}