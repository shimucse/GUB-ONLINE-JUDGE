import React,{useEffect, useState} from "react";
import jwtDecode from 'jwt-decode'
//import{useHistory} from 'react-router-dom';
import { useLocation} from "react-router-dom";
import Axios from 'axios';
import "../pagesCss/UserProfile.css"
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';



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
             setproblemSolvedList(data.acceptedList);
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
         {/* <div className="wrap">

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
                                {state:{problemSolvedList:problemSolvedList}
                                });}} >Solved Problem List</button>                          
                        <p><button>Contact</button></p>
                    </div>                      
                    : <h1> Hi You are not logged in.  </h1>       
        
                }

                
        </div>
        </div> */}
        { firstName?
         <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={img}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name:<span>{firstName}</span></MDBTypography>
                        <MDBTypography tag="h6">Country:<span>Bangladesh{country}</span></MDBTypography>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">University:<span>{university}</span></MDBTypography>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Since :<span>{UserAddDate}</span></MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Points:<span>1345</span></MDBTypography>
                        <MDBCardText className="text-muted">Solved: <span>{problemAcceptedCounter}</span></MDBCardText>
                      </MDBCol>
                      <button  className ="btn btn-outline-success" onClick={()=>{  navigate("/Submission",
                                {state:{problemSolvedList:problemSolvedList}
                                });}} >Solved Problem List</button>                          
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>:<h1>hi u arenot logged in"</h1>
}
        </>
    );
}
export default UserProfile;