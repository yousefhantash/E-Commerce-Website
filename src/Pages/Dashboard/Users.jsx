import axios from "axios";
import Cookie from 'cookie-universal';
import { useEffect } from "react";
import { baseURL, USERS } from "../../API/Api";
import Logout from "../Auth/Logout";

export default function Users(){

    const cookie = Cookie();

    useEffect(() => {
        axios.get(`${baseURL}/${USERS}`,{headers: {
        Authorization :"Bearer " + cookie.get('e-commerce'),
        },
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    },[])


    return(

        <div>
            <h1>Users Page</h1>
            <Logout/>
        </div>
        
    );
}