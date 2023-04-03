let heading = document.querySelector(".h1")

let btn = document.querySelectorAll(".button")
let len = document.querySelectorAll(".button").length

for (let i = 0; i < len; i++){
btn[i].addEventListener("click", function(){
    let txt = this.innerHTML
    heading.innerHTML = txt + " is clicked"
    console.log('click');
})
}