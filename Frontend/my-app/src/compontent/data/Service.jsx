import axios from "axios";
const url = "http://localhost:8080/result";

class Service{
    postresult(react){
        return axios.post(url,react);
    }
    
}
export default new Service()