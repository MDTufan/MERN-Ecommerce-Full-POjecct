const express=require("express");
const app=express();
const morgan = require('morgan')
const user = require('./Json/user.json')
const port=3001;
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const Islogin=(req,res,next)=>{
   console.log("Toli");
   next();
}


app.get("/",(req,res)=>{
    res.status(200).send('Hello i an hom page',
    );
});
app.get("/user",Islogin,(req,res)=>{
    console.log("tufan");
    res.status(200).send('Hello i an User page',
    );
});
app.get("/api/user",(req,res)=>{
    
    res.status(200).send( user.map((data)=>{
        data.id
    })
    );
});


app.post("/",(req,res)=>{
    res.status(200).send('Hello i an post route',
    );
});

app.listen(port,()=>{
    console.log(`Server is Runing http://localhost:${port}`);
})