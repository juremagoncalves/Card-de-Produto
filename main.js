const sofa = document.querySelector(".sofa");
const start = document.querySelector(".start");
const close = document.querySelector(".close");
const icon = document.querySelector(".icon");
const btn = document.querySelector(".btn");
let troca = true


function toggle(){
    if(troca){
        icon.querySelector(".start").classList.toggle("hide");
        icon.querySelector(".close").classList.toggle("hide");
        sofa.setAttribute("src","./assets/sofa.gif")
        troca = false;
    }
    else{
        icon.querySelector(".start").classList.toggle("hide");
        icon.querySelector(".close").classList.toggle("hide");
        sofa.setAttribute("src","assets/image 2.png")
        troca = true;
    }
}
icon.addEventListener("click", toggle)

document.addEventListener("click", () =>{
    setTimeout(function() {
        // icon.style.animation = ""
        icon.classList.toggle("show-background")
        icon.style.transition = "all 1s"
    }, 100)
})
