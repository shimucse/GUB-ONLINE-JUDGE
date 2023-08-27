import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Style from  '../pagesCss/Home2.module.css'

import Registration from './Registration';
import { useLocation} from "react-router-dom";

import Login from "./Login";

import CoffeCup from "./assets/coffe-cup.svg"; 
import Logo from "./assets/logo.svg"; 

const Home2 = ()=>{
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
       
       <div className="App">
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path
                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </symbol>
            </svg>

         <main className="possition-relative">
                <div className={Style.themeBgImage}>
                    <div className={Style.theme}> 

                            <div className="position-relative overflow-hidden p-3 p-md-3 m-md-1 text-center bg-body-tertiary-">
                                <div className="col-md-6 pt-lg-5 mx-auto my-5">
                                    <h1 className="display-3 fw-bold text-muted lg-color">
                                        <span className={`newClass ${Style.slogan}`}>
                                            Unlish your power
                                        </span>
                                    </h1>
                                    <h3 className="display-5 fw-normal text-muted">
                                        through
                                    </h3>
                                    <h2 className="display-1 fw-normal text-muted mb-3">
                                        <img src={Logo} />
                                    </h2>

                                    {/* <!-- Buttons - C, NodeJS, java, JS, PHP --> */}
                                    <div className="d-flex gap-2 justify-content-center py-1">
                                        <button className="btn btn-primary rounded-pill px-3" type="button">C</button>
                                        <button className="btn btn-secondary rounded-pill px-3" type="button">NodeJS</button>
                                        <button className="btn btn-success rounded-pill px-3" type="button">C++</button>
                                        <button className="btn btn-danger rounded-pill px-3" type="button">GO</button>
                                        <button className="btn btn-warning rounded-pill px-3 fw-bold" type="button">JasvaScript</button>
                                        <button className="btn btn-info rounded-pill px-3" type="button">RUST</button>
                                        <button className="btn btn-success rounded-pill px-3" type="button">JAVA</button>
                                        <button className="btn btn-dark rounded-pill px-3" type="button">Python</button>
                                        <button className="btn btn-info rounded-pill px-3" type="button">PHP</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`d-md-flex ${Style.flexMdEqual} w-100 my-md-3 ps-md-3`}>
                    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Top Rank Rabia Akter </h2>
                             <input  name="texr" placeholder="score: 8000" value="score: 8000" style={{width:'200px'}}/>
                              </div>
                                <div className="bg-body-tertiary shadow-sm mx-auto"
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>                               
                                </div>
                           
                    </div>

                    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Hit the road (☕)</h2>
                            <p className="lead">Dont't miss the train</p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                            <form className={`m-3 p-3 ${Style.formSignin}`}>
                                {/* <!-- <img className="mb-4" src="public/assets/coffe-cup.svg" alt="" height="56"> --> */}
                                <h1 className="h3 mb-3 fw-normal text-bg-dark">Please sign in</h1>

                                <div className={Style.formFloating}>
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className={Style.formFloating}>
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="form-check text-start my-3">
                                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label className="form-check-label text-bg-dark" for="flexCheckDefault" >
                                        Remember me
                                    </label>
                                </div>
                                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                            </form>
                        </div>
                    </div>
                    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Upcoming Contest</h2>
                            <input  name="begin" placeholder="Date: 08-09-2023" value="Date: 08-09-2023" style={{width:'200px'}}/>
                        </div>
                        <div className="bg-body-tertiary shadow-sm mx-auto"
                            style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
                    </div>

                </div>
            </main>

            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md text-center">
                        <img src={CoffeCup} width="96" />
                        <small className="d-block mb-3 text-body-secondary">&copy; 2023</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Add NewProblem</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Display Problem</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Team contest</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Resource online</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Resource offline</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Useful links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">UseBrain</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Education</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">onlineProblem</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
   
  </>
    
  );
}
export default Home2;