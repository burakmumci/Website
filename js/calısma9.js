document.body.style.backgroundColor = "red"
let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick (){
    console.log("tıklandı")
    console.log(this.innerHTML = "Tıklarsan değişir tabi gerizekalı")
    this.style.color == "aqua" ? this.style.color = "black" : this.style.color = "aqua"
}

