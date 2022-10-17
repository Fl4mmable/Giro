const menuButton = document.querySelector(".m-menu")
const menuButton2 = document.querySelector(".m-menu2")
const menu = document.querySelector(".head-span")
const menu2 = document.querySelector(".choice")
const all_products = document.querySelector("#all-products")
const giroscooters = document.querySelector("#giroscooter")
const btn_next = document.getElementById("btn_next");
const btn_back = document.getElementById("btn_back");  
const mas = document.getElementsByClassName("advantages"); 


menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});
menuButton2.addEventListener("click", () => {
    menu2.classList.toggle("is-open2");
});
document.querySelector("#submit").onclick = function(){
  alert("Подписка успешно оформлена!");
}
window.addEventListener("load", function(){
    btn_next.addEventListener("click", function(){
    $(mas[mas.length - 1]).after(mas[0]);
    })
    btn_back.addEventListener("click", function(){
    $(mas[0]).before(mas[mas.length - 1]);
    })
    
    
    });
