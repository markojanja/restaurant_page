const createTextElement = (el, text)=>{
    const element = document.createElement(el)
    element.textContent = text

    return element
}
const createImgElement =(imagePath, text)=>{

    const element = document.createElement('img')
    element.src = imagePath
    element.setAttribute("loading","lazy")
    
    return element
}


export{createTextElement,createImgElement}