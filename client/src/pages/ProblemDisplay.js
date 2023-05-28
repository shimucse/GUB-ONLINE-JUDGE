import React , { useState } from "react";
import MDEditor, { commands }  from '@uiw/react-md-editor';
import rehypeSanitize, {defaultSchema} from 'rehype-stringify'


const ProblemDisplay = ()=>{

  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
      
    </div>
  );
}
export default ProblemDisplay;