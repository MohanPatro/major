const express=require('express');
const app=express();


const bodyParser=require('body-parser')
const path=require('path')
// const mongoose=require('mongoose')
// const session=require('express-session')
// const mongoDBStore=require('connect-mongodb-session')(session);


const connection=require('./helpers/connection');

// const irctc=require('./Models/IRCTCMailModel');


const router=require('./routes')
// const store=new mongoDBStore({
//     uri:MONGOURL,
//     collection:'sessions'

// })


app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended:false}))



app.listen(2000,async ()=>{
   await addData();
    console.log("app is listening on the port ");
})