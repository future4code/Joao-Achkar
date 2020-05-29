import axios from "axios";

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"
//a. Por ser um método de array, o forEach não funcionaria bem com o await

//b. 
type Subscriber = {
    id: string,
    name: string,
    email: string
}

const returnSubscribers = async (): Promise<Subscriber[]> => {
    const allSubscribersResult = await axios.get(`${baseURL}/subscribers/all`)
    return allSubscribersResult.data.map((response: any) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}
const main = async () => {
    try {
        const subscribers = await returnSubscribers()

        for (const subscriber of subscribers) {
            await axios.post(`${baseURL}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Bikes vão dominar o mundo! Veja agora",
            })
            console.log("Notificação enviada")
        }
    } catch (error) {
        console.log("Alguma coisa deu errado", error)
    }
}
main()


