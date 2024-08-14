import axios from "axios";
import Cookie from 'cookie-universal';
import { baseURL, LOGOUT } from "../../API/Api";

export default function Logout(){
    
    // Cookie
    const cookie = Cookie();

    async function handleLogout(){

        try{

        const response = await axios.get(`${baseURL}/${LOGOUT}`, {headers:{
        Authorization : "Bearer " + cookie.get("e-commerce"),
            },
        });
        console.log(response)
        }catch(err){
        console.log(err)
        }

    }
    return(

        <button onClick={handleLogout}>Logout</button>


);}