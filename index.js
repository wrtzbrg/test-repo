const express = require('express');
const app = express();

app.use(function (req,res,next){console.log(req.method +' '+req.path+' '+req.ip+' '+ new Date().toUTCString());next();})

app.get('/',(req,res,next)=>{
    console.log('Is it workin?')
    res.send('yeah - i think its alive ...')
})


var listener = app.listen(80,()=>{
    console.log(`app is listening on port ${listener.address().port}`)
});