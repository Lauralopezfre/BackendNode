var express = require('express');
var app = express();

require('dotenv').config();
console.log(process.env)

// app.get('/', (req, res)=>{
//     console.log('Se requiere el GET')
//     res.json({
//          valor:true
//     })
// })

//Aqui entra el Middleware
app.use(express.static('public')) 

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo')
})