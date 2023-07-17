import React,{useEffect, useState} from "react";
import jwtDecode from 'jwt-decode'
//import{useHistory} from 'react-router-dom';
import { useLocation} from "react-router-dom";
import Axios from 'axios';
import "../pagesCss/UserProfile.css"
import { useNavigate } from "react-router-dom";


const UserProfile = ()=>{
    const history = useLocation();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const[lastName, setLastName] = useState('');
    const[country, setCountry] = useState('');
    const[university, setUniversity] = useState('');
    const[img, setImg] = useState('');
    const [problemAcceptedCounter,setProblemAcceptedCounter]=useState(0);
    const[problemSolvedList, setproblemSolvedList]=useState([]);
    const [UserAddDate, setUserAddDate] =useState('');
    const [userDes,setUserDes]=useState([]);

    async function populateQuote(){
        const {data} = await Axios.get('http://localhost:5000/RegistraionAndLogin/viewProfile',{
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }
        })

        console.log("data from profile:"+data);
        if(data.success === true){
             setFirstName(data.firstName)
            // setUserEmail(data.email);
             setLastName(data.lastName);
             setCountry(data.country);
             setUniversity(data.university);
             setImg(data.img);
             setProblemAcceptedCounter(data.ProblemAcceptedCounter);
             setproblemSolvedList(data.problemSolvedList);
             setUserAddDate(data.UserAddDate);
             console.log("date:"+data.UserAddDate);
             console.log("inside profile");
        }else{
            alert(data.error);
        }
        //if needed to delete all user
        //await Axios.delete('http://localhost:5000/RegistraionAndLogin/delete');
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
    return(
        <>
          <div className="wrap">

            <div className="body_column">
               { firstName?
                                <div class="card">
                                    <img  className="img" src={img}  />
                                    <h1>{firstName}</h1>
                                    <p><span>Country: </span>{country}</p>
                                    <p><span>University: </span>{university}</p>
                                    <p><span>Since: </span>{UserAddDate}</p>
                                    <p><span>Points: </span>23456</p>
                                    <p><span>Solved: </span>{problemAcceptedCounter}</p>

                                    <button onClick={()=>{  navigate("/Submission",
                                            {state:{email:userEmail}
                                            });}} >Solved Problem</button>
                                    

                                
                                    <p><button>Contact</button></p>
                                </div>                      
                               : <h1> Hi You are not logged in.  </h1>       
                  
               }

                
        </div>
        </div>
        </>
    );
}
export default UserProfile;