function Get(x){
    return document.querySelector(x)
}
let modal=Get(".modal-window")
let fermer=Get(".fermer")
let container=Get(".container")
container.classList.add("div-formulaire-first")
fermer.addEventListener('click',()=>{
    modal.style.display="none"
    container.classList.remove("div-formulaire-first")
})