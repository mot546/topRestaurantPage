import "./styles.css";
import "./headerFooter.css"
import homeDom from "./homeDom.js";
import menuDom from "./menuDom.js";
// import aboutDom from "./aboutDom.js";

function buttonTabListeners(){
    const buttons = document.querySelectorAll('.tab-buttons');
    
    const content = document.querySelector('.content');
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
        content.classList.remove("content-home");
        content.innerHTML = "";
        if(button.id == "home"){
            homeDom();
        }
        else if(button.id == "menu" || button.classList.contains("menu")){
            menuDom();
        }
        // else{
        //     aboutDom();
        // }
        
        });
    });
}
homeDom();
buttonTabListeners();