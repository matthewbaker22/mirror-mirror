let inputBox = document.getElementById("message")

let output1 = document.getElementById("articleBox1")
let output2 = document.getElementById("articleBox2")

inputBox.addEventListener("keyup", function (event) {
    output1.innerHTML = event.target.value
    output2.innerHTML = event.target.value
    console.log(event.target.value)
})
