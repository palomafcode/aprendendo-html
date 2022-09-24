const express = require("express");

let app = express();

app.get('/', (req, res)=>res.send("Aprendendo express"));
//criando um servidor
app.listen(3000, ()=>console.log("Servidor esta rodando na porta 3000"))
