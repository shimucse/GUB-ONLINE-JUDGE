import MDEditor from "@uiw/react-md-editor";
import React,{useState} from "react";



export default function AddProblem() {
  const [problemId, setProblemId]= useState();

  return (
    <>
      <div className="">
        <h1 className="">
          Problem
        </h1>

       
          <p className="text-sm italic text-gray-500 my-2">
            Get started by providing the initial details needed to create a
            problem.
          </p>
    

        {/* Problem Details */}
        <div className="">
          <div className="">
            <p className="">Problem Id</p>
            <input
              value=""
             
              type="text"
              required
              placeholder="Write problem slug. i.e problem123 (Should be unique)"
            />
          </div>
          <div className="">
            <p className="">Problem Name</p>
            <input
              value=""
             
              type="text"
              className=""
              required
              placeholder="Write problem name"
            />
          </div>
          <div className="">
            <p className="">Description</p>
            <MDEditor
              value=""
              
              required
              preview="edit"
            />
          </div>
         
            <p className="">Input Format</p>
            <div className="">
              <MDEditor
                value=""
               
                preview="edit"
              />
            </div>
        
            <p className="">Output Format</p>
            <div className="">
              <MDEditor
                value=""
                placeholder=""
                preview=""
            
              />
          </div>
          <div className="">
            <p className="">First Sample Input Output: </p>
            <input
              value=""
             
              type="text"
              className=""
              required
              placeholder="Give input"
            />
              <input
              value=""
             
              type="text"
              className=""
              required
              placeholder="Give output"
            />
          </div>
          <div className="">
            <p className="">Second Sample Input Output : </p>
            <input
              value=""
             
              type="text"
              className=""
              required
              placeholder="Give input"
            />
              <input
              value=""
             
              type="text"
              className=""
              required
              placeholder="Give output"
            />
          </div>          
          <div className="">
          <div className="flex">
            <p className="">Add all input String</p>
            <textarea
              value=""
              rows ='8'
             cols='75'
              type="text"
              className=""
              required
              placeholder="Give all  input"
            />
             
          </div>
          </div>
          <div className="">
          <div className="flex">
            <p className="">Add all output </p>
            <textarea
             rows ='8'
             cols='75'
              value=""             
              type="text"
              className=""
              required
              placeholder="Give output"
            />
          
          </div>
          </div>          
         <button>Add Problem</button>
         <button>Edit Problem</button>
         <button>Delete Problem</button>

        </div>

       
      </div>
     
    </>
  );
}