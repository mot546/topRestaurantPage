
export default function loadHome(){

    const content = document.getElementById('content');
    content.classList.add("content-home");
    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");
    
    const welcome = document.createElement("p");
    welcome.textContent = "Welcome to";
    const restName = document.createElement('p');
    restName.textContent = "LekLek's Silogan";
    const slogan = document.createElement("p");
    slogan.textContent = "Delicious All-Day Silog Meals";
    const viewMenu = document.createElement('button');
    viewMenu.textContent = "Menu";
    viewMenu.setAttribute("type", "button");
    viewMenu.classList.add("menu","tab-buttons");

    welcome.classList.add("welcome");
    restName.classList.add("restaurant-name");
    slogan.classList.add("slogan");
    
    textContainer.append(welcome,restName,slogan, viewMenu);
    content.appendChild(textContainer);
}

