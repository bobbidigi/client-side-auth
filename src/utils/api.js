import axios from 'axios'

export default function (){
    return axios.create({
        baseURl: "http://localhost:8000",
        headers: {
            Authorization: localStorage.getItem("token"),
        }

    })
}