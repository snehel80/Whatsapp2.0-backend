import express from 'express';
import Connection from './database/db.js';
import Route from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.port || 8000;

Connection();   

//Deplpyment code

// const _dirname1 = path.resolve();
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(_dirname1,"../client/build")));

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(_dirname1,"client","build","index.html"));
//     })
// }else{
//     app.get('/',(req,res)=>{
//         res.send("Server is working properly");
//     });
// }

//Deployment code

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})