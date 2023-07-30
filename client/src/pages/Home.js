import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../pagesCss/Home.css'

import Registration from './Registration';
import { useLocation} from "react-router-dom";

import Login from "./Login";

const Home = ()=>{
    let navigate = useNavigate();
    const[token, setToken] = useState('');
    useEffect(
        ()=>{
              setToken(localStorage.getItem('token'));

        }
    ,[]);
    console.log("token:"+token);

  return (
      <>
               
      <div className="wrap">
          <div className="H_body_column">

              <div className="H_left_body_column">            
                    <div className="H_quote">
                  
                          <span className="H_unleash">Unleash Your </span>
                          <span className="H_skill">Programming Skill It will  </span>
                          <span className="H_it_will">helps you</span>
                          <span className="H_rockstar">  become a rockstar </span>
                          <span className="H_programmer">Programmer</span>
                    </div>
                    {
                            (!token)?
                             <div className="H_login_signup_div">
                                <a href=""><button className="H_login_button" onClick={()=>navigate("/Login")}>Login</button></a>
                                <a href=""> <button className="H_signup_button"onClick={()=>navigate("/Registration")}>Signup</button></a>
                            </div>:(' ')
                    }

              </div>

              <div className="H_right_body_column">             
                    <img className="H_contest_img" src={require("../img/rsz_contest1.png")}/>
                        
                        <p>
                                <span className="H_upcoming_contest">Upcoming Contest</span>
                                <span className="H_contest_name">Contest Name  : <span className="H_name">ICPC 2022</span></span>
                                <span className="H_contest_date"> Date  : <span className="H_date">20-8-2022</span></span>
                                <span className="H_contest_start"> Start  : <span className="H_start">08:30:00</span></span>
                                <span className="H_contest_end"> End  : <span className="H_end">10:30:00</span></span>
                        </p>
                    <button type="button" className="H_contest_join">Join Now</button>

              </div>
              

          

        </div>
    </div>
  </>
    
  );
}
export default Home;