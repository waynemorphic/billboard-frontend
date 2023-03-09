import axios from "axios"

export default function config(){
    const apiKey = import.meta.env.VITE_API_KEY
    axios.defaults.headers.common['Authorization'] = 'Bearer' + apiKey // => setting auth headers for all requests
    console.log(axios.defaults.headers.post['Authorization'] = 'Bearer' + apiKey) // => setting up auth headers for post requests

    // creating a specific axios instance
    const reqInstance = axios.create({
        headers: {
            Authorization: 'Bearer' + apiKey
        }
    })

    const config = {
        headers: {

        }
    }
    const url = ""

    const data = {}
}