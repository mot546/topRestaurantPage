export default function loadHome(){

    const content = document.getElementById('content');
    content.classList.add("content-home");
    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");
    
    const welcome = document.createElement("p");
    welcome.textContent = "This is ";
    const restName = document.createElement('p');
    restName.textContent = "LekLek's Silogan";
    const slogan = document.createElement("p");
    slogan.textContent = "located at Timalan Balsahan, Naic Cavite";

    welcome.classList.add("welcome");
    restName.classList.add("restaurant-name");
    slogan.classList.add("slogan");
    
    textContainer.append(welcome,restName,slogan);
    content.appendChild(textContainer);
}