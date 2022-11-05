const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".main_menu");  
const dropdown=document.querySelector(".content");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  dropdown.classList.toggle("active");
  
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
 
}))


