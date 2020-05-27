import axios from "axios";

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

//a Essa função é uma função nomeada. Não sei dizer o porquê

async function createNews(
    title: string, 
    content: string, 
    date: number
    ): Promise<void> {
    await axios.put (`${baseURL}/news`, {
        title,
        content,
        date
    })
}
const main = async () => {
    try {
        await createNews(
            "O mundo agora é das bike",
            "Ciclomobilidade ganha espaço no mundo pós pandemia.",
            1590522289000
        );
        console.log("Notícia criada com sucesso")
    } catch(error) {
        console.log("Algo deu errado", error)
    };
}
main()