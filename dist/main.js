(()=>{"use strict";const e=(e,a)=>{const t=document.createElement(e);return t.textContent=a,t};class a{constructor(e,a,t){this.title=e,this.title=a,this.image=t}}const t=(a,t,n,s)=>{const i=document.createElement("div");return i.classList.add("card"),i.appendChild(((e,a)=>{const t=document.createElement("img");return t.src=e,t.setAttribute("loading","lazy"),t})(n)),i.appendChild(e("h3",a)),i.appendChild(e("p",t)),i},n=()=>{const n=document.getElementById("main");n.innerHTML="",n.appendChild((()=>{const n=e("h1","Menu"),s=(()=>{const e=new a;e.title="Paella",e.desc="A traditional Valencian dish made with saffron, rice, vegetables, and meat or seafood. The dish is cooked in a wide, shallow pan called a paellera, and is typically made with chicken, rabbit, and snails. The rice is cooked in chicken or fish stock and saffron, and is typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans.",e.image="./assets/paella.jpg";const t=new a;t.title="Escalivada",t.desc="Grilled vegetables, such as eggplant, bell peppers, and onions, are the main ingredient of this traditional Catalan dish. The vegetables are cooked over an open flame until they are tender and slightly charred. They are then peeled and sliced, and served with anchovies. The dish is typically served cold and is often accompanied by bread.",t.image="./assets/escalivada.jpg";const n=new a;n.title="Fideuà",n.desc="A noodle dish similar to paella, but made with short, thin noodles instead of rice. The dish is typically made with seafood, such as squid, shrimp, and mussels. The noodles are cooked in fish or seafood stock, and are typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans.",n.image="./assets/Fideua.jpg";const s=new a;s.title="Botifarra amb mongetes",s.desc="A traditional Catalan dish consisting of grilled sausages served with white beans. The sausages are made with pork and typically seasoned with spices, such as black pepper, paprika, and cumin. The white beans are cooked with garlic and onion, and are typically served in a casserole dish.",s.image="./assets/Botafire.jpg";const i=new a;i.title="Calçots amb romesco",i.desc="A traditional Catalan dish of grilled green onions, often served with a spicy red pepper and almond sauce. Calçots are a type of green onion that are typically grilled over an open flame until they are tender and slightly charred. They are served with a sauce made from red peppers, tomatoes, bread, almonds and olive oil, called Romesco sauce.",i.image="./assets/calc.jpg";const o=new a;return o.title="Esqueixada",o.desc="A traditional Catalan salad made with salt cod, tomatoes, onions, and olives. The salt cod is soaked in water for several hours to remove the salt, then flaked and mixed with the tomatoes, onions, and olives. The salad is typically dressed with olive oil and vinegar, and is often garnished with parsley.",o.image="./assets/Ex.jpg",[t,o,e,n,s,i]})(),i=document.createElement("div");return i.classList.add("menu"),i.appendChild(n),s.map((e=>{i.appendChild(t(e.title,e.desc,e.image))})),i})())},s=()=>{const a=document.getElementById("main"),t=document.querySelectorAll(".nav-btn");var s;a.innerHTML="",a.appendChild((()=>{const a=document.createElement("div");a.classList.add("home");const t=document.createElement("h1"),n=e("p","Discover the Ultimate Spanish Dining Experience at Our Authentic Restaurant in Barcelona!");t.textContent="El Jardín de España ";const s=document.createElement("button");return s.classList.add("main-btn"),s.textContent="Menu",a.appendChild(t),a.appendChild(n),a.appendChild(s),a})()),t[0].classList.add("active"),s=t,document.querySelector(".main-btn").addEventListener("click",(function(){s.forEach((e=>{"menu"===e.dataset.target?e.classList.add("active"):e.classList.remove("active")})),n()}))};function i(e){document.querySelectorAll(".nav-btn").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("nav"),a=document.createElement("ul"),t=document.createElement("li");t.classList.add("nav-btn"),t.setAttribute("data-target","home");const n=document.createElement("li");n.classList.add("nav-btn"),n.setAttribute("data-target","menu");const s=document.createElement("li");return s.classList.add("nav-btn"),s.setAttribute("data-target","about"),e.appendChild(a),a.appendChild(t),a.appendChild(n),a.appendChild(s),t.textContent="Home",n.textContent="Menu",s.textContent="About Us",e})()),e.appendChild((()=>{const e=document.createElement("main");return e.setAttribute("id","main"),e})()),s(),e.appendChild((()=>{const e=document.createElement("footer"),a=document.createElement("p");return a.textContent="Copyright © 2023 MarkoJanja ",e.appendChild(a),e})())})(),document.querySelectorAll(".nav-btn").forEach((a=>{a.addEventListener("click",(function(){switch(a.dataset.target){case"home":s(),i(a);break;case"about":(()=>{const a=document.getElementById("main");a.innerHTML="",a.appendChild((()=>{const a=document.createElement("div");a.classList.add("about");const t=e("h1","About Us"),n=e("p","Welcome to our authentic Spanish restaurant, located in the heart of Barcelona. We have been serving traditional Catalan and Spanish cuisine for over 20 years, using only the freshest ingredients sourced straight from the local markets. Our menu features a wide variety of dishes from paella to botifarra, and our skilled chefs are dedicated to ensuring that each dish is cooked to perfection."),s=e("p","We believe that dining should be an experience, not just a meal. That's why we've created a cozy and charming atmosphere in our restaurant that will make you feel like you're in the streets of Barcelona. Whether you're celebrating a special occasion or just looking for a casual meal, we're sure you'll enjoy our warm hospitality and delicious food."),i=e("p","We also offer a variety of options for those with dietary restrictions, such as gluten-free options, so everyone can enjoy our delicious food. Our restaurant also have a bar area where you can enjoy a variety of Spanish wines, sherries and cava."),o=e("p","We are passionate about sharing our love of Spanish and Catalan cuisine with our customers and we hope you'll come dine with us soon! Enjoy the true taste of Barcelona in our restaurant.");return a.appendChild(t),a.appendChild(n),a.appendChild(s),a.appendChild(i),a.appendChild(o),a})())})(),i(a);break;case"menu":n(),i(a);break;default:console.log("hola")}}))}))})();