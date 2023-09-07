

let items = document.querySelectorAll(".faq-item")
items.forEach(ele =>{
    ele.addEventListener("click",(e)=>{
let clicked = e.target;
let close = clicked.closest(".faq-item").querySelector(".content")
let imrSrc = clicked.closest(".faq-item").querySelector("#plus")
close.classList.toggle("active")
console.log(close.classList);
if(close.classList.contains("active")){
    imrSrc.setAttribute("src","wrong.png")
}else{
    imrSrc.setAttribute("src","plus.png")
}

    })
})

console.log(items);