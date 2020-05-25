
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

//exercicio 3A
function onImgButtonClick() {
    const input = document.getElementById("img-input")
    if(
    input.value.includes(".png")|| 
    input.value.includes(".jpeg")||
    input.value.includes(".jpg")
    ){
        const containerDeImagens = document.getElementById("container-das-imagens")
        containerDeImagens.innerHTML += "<img src='" + input.value + "'>"
    }else {
        alert("Insira uma img válida")
    }
}
function onKeyDownImgInput(e) {
    if(e.key === "Enter") {
        if(
            e.target.value.includes(".jpeg") ||
            e.target.value.includes(".png") ||
            e.target.value.includes(".jpg")
        ) {
            const containerDeImagens = document.getElementById("container-das-imagens")
            containerDeImagens.innerHTML += "<img src='" + e.target.value + "'>"
        }else {
            alert("Insira uma img válida")
        }
    }
}