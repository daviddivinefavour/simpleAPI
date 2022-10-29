const express = require('express');
const app = express();

const port = 3000;

app.listen(port, ()=>console.log(`Server is listening at port ${port}`));

app.get('/',(req,res)=>res.send('Everything Smooth.'));
app.get('/info',(req,res)=>{
     const resObject = { 
          slackUsername: 'DDC', 
          backend: true, 
          age: 22, 
          bio: 'My name is Divinefavour David, a nodejs backend developer. I love coding and find the concept of FP increasingly amazing. PS: I\'m a chowhound' 
     }
     return res.status(200).send(resObject)
});