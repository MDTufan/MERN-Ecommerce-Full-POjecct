const express=require("express");
const app=express();
const morgan = require('morgan')
const port=3001;
app.use(morgan("dev"));
app.get("/",(req,res)=>{
    res.status(200).send('Hello i an hom page',
    );
});

app.listen(port,()=>{
    console.log(`Server is Runing http://localhost:${port}`);
})