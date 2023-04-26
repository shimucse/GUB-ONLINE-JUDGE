const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
     return res.json({hello: "world!"});
})

app.post('/run', (req,res)=>{ 

   const {language='cpp',code} = req.body;

    return res.json(req.body)
})
app.listen(5000,()=>{
    console.log("listening on port 5000")
})