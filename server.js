const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./client-side')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client-side/index.html'));
})

const port = 3200;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})