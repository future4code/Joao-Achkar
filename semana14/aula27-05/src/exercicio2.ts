import axios from 'axios'

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type subscriber = {
    id: string,
    name: string,
    email: string
}

//a A sintaxe da arrow function vc declara ela atribuindo ela à uma variável
//O async vem sempre antes da função


//b
const returnSubscribers = async ():Promise<subscriber[]>=>{
    const allSubscribersResult = await axios.get(`${baseURL}/subscribers/all`)
    return allSubscribersResult.data.map((response:any)=>{
        return {
            id: response.id,
            name: response.name,
            email: response
        }
    })
}

async function main(){
    try{
        console.log(await returnSubscribers())
    }catch (error){
        console.log(error)
    }
}
main()