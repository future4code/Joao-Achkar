import axios from 'axios'

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type subscriber = {
    id: string,
    name: string,
    email: string
}

//a utilizaremos o endpoint GET /subscriber/all

//b indicamos usando o um :Promise<any[]>

//c

export async function returnSubscribers() :Promise<subscriber[]> {
    const allSubscriberResult = await axios.get(`${baseURL}/subscribers/all`);

    return allSubscriberResult.data.map((response:any)=>{
        //console.log(response)
        return{
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}
//console.log("hello world")

async function main(){
    try{
        console.log(await returnSubscribers())
    }catch (error){
        console.log(error)
    }
}
main()