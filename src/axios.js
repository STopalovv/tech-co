import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/tech-co/us-central1/api', //cloud function
});

export default instance;