import React , { useState,useEffect } from "react";
import Axios from 'axios';
import  '../pagesCss/problemHtml.css';

const problemHtml = ()=>{   

  return (

      <div className   ="wrap">
            <div className="body_column">
                
                  <h2 className="problem_archive">Problem  Archive</h2>

                  <table>
                        <tr>
                            <th>Id</th>
                            <th>Problem Name</th>
                            <th>Status</th>
                            <th>Acceptance/Submission</th>
                            <th>Problem Setter</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><button className="problemName" href="problem_description.html">300. Bags with Balls
                            </button> </td>
                            <td>&#10003;</td>
                            <td>8/12</td>
                            <td>uva</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><button className="problemName" href="">IP Checking</button></td>
                            <td> </td>
                            <td>9/12</td>
                            <td>loghtoj</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td><button className="problemName" href="">And ChessBoard</button> </td>
                            <td>&#10003;</td>
                            <td>10/11</td>
                            <td>toph</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><button  className="problemName" href="">Merit Position</button></td>
                            <td> </td>
                            <td>12/13</td>
                            <td>DevSkill</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><button  className="problemName" href="">Merit Position</button>Gretting</td>
                            <td></td>
                            <td>7/10</td>
                            <td>lightoj</td>
                        </tr>
                          <tr>
                              <td>6</td>
                              <td><button className="problemName" href="">Prime generator</button></td>
                              <td>&#10003;</td>
                              <td>7/28</td>
                              <td>Rabia</td>
                          </tr>
                            <tr>
                              <td>7</td>
                              <td><button  className="problemName" href="">Giovanni Rovelli</button></td>
                              <td>&#10003;</td>
                            <td>10/11</td>
                            <td>toph</td>
                          </tr>
                            <tr>
                              <td>8</td>
                              <td><button className="problemName" href="">Magic sauare</button></td>
                              <td>&#10003;</td>
                              <td>9/10</td>
                              <td>Rabia</td>
                          </tr>
                              <tr>
                                <td>9</td>
                                <td><button className="problemName"href="">Opposite Task</button></td>
                                <td>&#10003;</td>

                                <td>4/10</td>
                                <td>lightoj</td>
                            </tr>
                              <tr>
                                <td>10</td>
                                <td><button className="problemName" href="">Country Roads</button></td>
                                <td>&#10003;</td>
                                <td>1/20</td>
                                <td>lightoj</td>
                            </tr>

                          
                  </table>
                  <div className="next_previou_button">
                    <button href={"" }className="previous">&laquo; Previous</button>
                    <button href={""} className="next">Next &raquo;</button>
                </div>  
            </div>
 

       </div>
  );
}
export default problemHtml;