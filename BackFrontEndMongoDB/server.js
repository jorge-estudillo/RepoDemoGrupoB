const express=require("express");
const cors=require("cors");
const mongoose = require("mongoose");

const Usuario = require("./models/Usuario");

const app=express();
const port=3600;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*CONEXION CON MONGODB*/
mongoose.connect("mongodb+srv://jestudillo:jestudillo@cluster0.6m8fm.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB conectado al proyecto"))
.catch(err => console.log(err));


app.get("/api/usuarios", (req, res)=>{
   res.json(registros);
});

app.post("/api/usuarios", (req, res)=>{
    const nuevo = {
        id:idActual++,
        nombre:req.body.nombre,
        email:req.body.email,
        genero:req.body.genero,
        plataformas:req.body.plataformas
    };
    registros.push(nuevo);
    res.json(nuevo);
});

app.put("/api/usuarios/:id", (req, res)=>{
    const id=parseInt(req.params.id);
    const usuario=registros.find(u => u.id==id);

    if(!usuario){
        return res.status(404).json({mensaje:"Usuario no encontrado"});
    }

    usuario.nombre=req.body.nombre;
    usuario.email=req.body.email;
    usuario.genero=req.body.genero;
    usuario.plataformas=req.body.plataformas;

    res.json(usuario);
});

app.listen(port, ()=>{
    console.log("Listening at http://localhost:3600");
});

