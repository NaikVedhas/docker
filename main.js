const express = require('express');

const app =express();

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    return res.status(200).json({message:"Hey I'm in docker :)"})
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})