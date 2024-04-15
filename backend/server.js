import app from "./app.js";

app.listen(process.env.FRONTEND_URL, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.FRONTEND_URL}`);
})
