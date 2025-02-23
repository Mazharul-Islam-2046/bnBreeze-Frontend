import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bn-breeze-server.vercel.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})