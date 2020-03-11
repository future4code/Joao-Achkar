function insereTarefa() {
    const input = document.querySelector("input")
    const novoItemDaLista = input.value
    const diaDaSemana = document.querySelector("select").value

    if (novoItemDaLista === "") {
        alert("Insira uma tarefa")
    } else {
         function riscarTarefa(){
                    listaTarefas.innerHTML += "<li><strike>" + novoItemDaLista + "</strike></li>"
                }
        switch (diaDaSemana) {
            case "segunda": {
                const listaTarefas = document.getElementById("segunda")
                listaTarefas.innerHTML += "<li onclick='riscarTarefa()'>" + novoItemDaLista + "</li>"
               
                break;
            }
            case "terca": {
                const listaTarefas = document.getElementById("terca")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }
            case "quarta": {
                const listaTarefas = document.getElementById("quarta")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }
            case "quinta": {
                const listaTarefas = document.getElementById("quinta")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }
            case "sexta": {
                const listaTarefas = document.getElementById("sexta")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }
            case "sabado": {
                const listaTarefas = document.getElementById("sabado")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }
            case "domingo": {
                const listaTarefas = document.getElementById("domingo")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                break;
            }

            default:
                break;
        }
 
    }
   input.value = ""
}
