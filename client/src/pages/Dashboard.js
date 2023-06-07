import React,{useEffect, useState} from "react";
import jwtDecode from 'jwt-decode'
//import{useHistory} from 'react-router-dom';
import { useLocation} from "react-router-dom";
import Axios from 'axios';


const Dashboard = ()=>{
    const history = useLocation();
    const [firstName, setFirstName] = useState('');

   async function populateQuote(){
        const {data} = await Axios.get('http://localhost:5000/RegistraionAndLogin/quote',{
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }
        })

        console.log(data);
        if(data.success === true){
             setFirstName(data.firstName)
        }else{
            alert(data.error);
        }
    }
    useEffect(()=>{

        const token = localStorage.getItem('token');
        if(token){
            const user = jwtDecode(token)

            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/'
                history.replace('/login')
            }
            else{
                populateQuote();
            }
        }

    },[])
    return<h1>Hi {firstName || "no firstName found"} now you can submit your problem </h1>
}
export default Dashboard;