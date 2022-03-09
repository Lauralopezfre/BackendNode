var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    console.log('Se requiere el GET')
    res.json({
        valor:true
    })
})

app.listen(4000, ()=>{
    console.log('Servidor corriendo')
})