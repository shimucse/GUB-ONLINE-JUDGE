import React from "react";

const AllSubmissionDisplay = ()=>{
    return(

            <>
               <div className="wrap">
               <div class="body_column">
              
                <h2 class="all_submission">All Submission</h2>


                <table>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Problem Name</th>
                          <th>Verdict</th>
                          <th>CPU TIME</th>
                          
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Rabia Akter</td>

                          <td><a href="">feeling lucky</a> </td>
                          <td class="verdict">Accepted</td>
                          <td>0.07</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Rabia Akter</td>
                          <td><a href="">IP Checking</a></td>
                          <td class="verdict">Accepted</td>
                          <td>0.08</td>

                      </tr>
                      <tr>
                          <td>3</td>
                          <td>Rabia Akter</td>
                          <td><a href="">And ChessBoard</a> </td>
                          <td class="verdict">Accepted</td>
                          <td>0.00</td>
                      </tr>
                      <tr>
                          <td>4</td>
                          <td>Rabia Akter</td>
                          <td><a href="">Merit Position</a></td>
                          <td class="verdict">Accepted</td>
                          <td>0.01</td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td>Rabia Akter</td>
                          <td><a href="">Merit Position</a>Gretting</td>
                          <td class="verdict">Accepted</td>
                          <td>0.01</td>
                      </tr>
                        <tr>
                            <td>6</td>
                            <td>Rabia Akter</td>
                            <td><a href="">Prime generator</a></td>
                            <td class="verdict">Accepted</td>
                            <td>5.00</td>
                        </tr>
                          <tr>
                            <td>7</td>
                            <td>Rabia Akter</td>
                            <td><a href="">Giovanni Rovelli</a></td>
                          <td class="verdict">Accepted</td>
                          <td>0.02</td>
                        </tr>
                          <tr>
                            <td>8</td>
                            <td>Rabia Akter</td>
                            <td><a href="">Magic sauare</a></td>
                            <td class="verdict">Accepted</td>
                            <td>0.01</td>
                        </tr>
                            <tr>
                              <td>9</td>
                              <td>Rabia Akter</td>
                              <td><a href="">Opposite Task</a></td>
                              <td class="verdict">Accepted</td>
                              <td>0.04</td>
                          </tr>
                            <tr>
                              <td>10</td>
                              <td>Rabia Akter</td>

                              <td><a href="">Country Roads</a></td>
                              <td class="verdict">Accepted</td>
                              <td>0.01</td>
                            </tr>
                </table>
                <div class="next_previou_button">
                <a href="#" class="previous">&laquo; Previous</a>
                <a href="#" class="next">Next &raquo;</a>
              </div>  
          </div>



                </div>  
            </>
     );
};
export default AllSubmissionDisplay;