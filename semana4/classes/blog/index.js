class Post {
    constructor(titulo, texto, autor) {
        this.titulo = titulo
        this.texto = texto
        this.autor = autor
    }
}
function onClickButton() {

    let tituloNovo = document.getElementById("titulo").value
    let textoNovo = document.getElementById("texto").value
    let autorNovo = document.getElementById("autor").value

    const tituloPost = document.getElementById("tituloPost")
    tituloPost.innerHTML += tituloNovo
    const textoPost = document.getElementById("textoPost")
    textoPost.innerHTML += textoNovo
    const autorPost = document.getElementById("autorPost")
    autorPost.innerHTML += autorNovo

    let novoPost = new Post (tituloNovo, textoNovo, autorNovo)
    console.log(novoPost)

    let arrayPost = []
    arrayPost.push(novoPost)
    console.log(arrayPost)
}
