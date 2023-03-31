import axios from "axios";


export const api = axios.create({
    baseURL: process.env.BASEURL, headers: {
        Authorization: "bearer " + process.env.TOKEN
    }
})



