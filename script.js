let logo=document.querySelector("#logo");

logo.addEventListener("click",()=>{
    location.replace(location.href);
})

const menu=document.querySelector("#menu");
const MENU=document.querySelector("#MENU");
const close=document.querySelector("#close");
const call=document.querySelector("#call");
const chat=document.querySelector("#chat");

menu.addEventListener("click",()=>{
    MENU.classList.add("active");
    menu.classList.add("deactive");
    close.classList.add("active");
})

close.addEventListener("click",()=>{
    MENU.classList.remove("active");
    menu.classList.remove("deactive");
    close.classList.remove("active");
})
