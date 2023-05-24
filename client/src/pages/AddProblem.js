import MDEditor from "@uiw/react-md-editor";



export default function AddProblem() {
  
 


  return (
    <>
      <div className="max-w-4xl mx-auto font-mono my-4">
        <h1 className="text-4xl">
          Problem
        </h1>

       
          <p className="text-sm italic text-gray-500 my-2">
            Get started by providing the initial details needed to create a
            problem.
          </p>
    

        {/* Problem Details */}
        <div className="mt-8 space-y-8">
          <div className="flex">
            <p className="w-48 min-w-fit">Problem Slug</p>
            <input
              value="problem slud"
             
              type="text"
              className="flex-grow outline-none border-2 border-gray-400 p-2 rounded-sm shadow"
              required
              placeholder="Write problem slug. i.e problem123 (Should be unique)"
            />
          </div>
          <div className="flex">
            <p className="w-48 min-w-fit">Problem Name</p>
            <input
              value="problemDetail.title"
             
              type="text"
              className="flex-grow outline-none border-2 border-gray-400 p-2 rounded-sm shadow"
              required
              placeholder="Write problem name"
            />
          </div>
          <div className="flex items-start">
            <p className="w-48 min-w-fit">Description</p>
            <textarea
              value="problemDetail.desc"
              
              rows={4}
              required
              className="flex-grow outline-none border-2 border-gray-400 p-2 rounded-sm shadow"
              placeholder="Write a short summary about the challange."
            />
          </div>
          <div className="flex items-start">
            <p className="w-48 min-w-fit">Problem Statement</p>
            <div className="flex-grow max-w-[880px]">
              <MDEditor
                value="problemDetail.statement"
              
                preview="edit"
              />
            </div>
          </div>
          <div className="flex items-start">
            <p className="w-48 min-w-fit">Input Format</p>
            <div className="flex-grow  max-w-[880px]">
              <MDEditor
                value="problemDetail.input"
                
               
                preview="edit"
              />
            </div>
          </div>
          <div className="flex items-start">
            <p className="w-48 min-w-fit">Output Format</p>
            <div className="flex-grow  max-w-[880px]">
              <MDEditor
                value="Output"

                preview="editEdit"
              />
            </div>
          </div>
          
         
        </div>

       
      </div>
     
    </>
  );
}