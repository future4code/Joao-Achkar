//  function onInputChange(e){
//      console.log(e.target.key)
//  }
function onKeyDownInput(e) {
   if(e.key === "Enter") {
    const input = document.getElementById("input")
    const divDosP = document.getElementById("div-dos-p")
    divDosP.innerHTML += "<p>" + input.value + "</p>"
    input.value = ""
    }
}

function onButtonClick() {
    const input = document.getElementById("input")
    const divDosP = document.getElementById("div-dos-p")
    divDosP.innerHTML += "<p>" + input.value + "</p>"
    input.value = ""
}