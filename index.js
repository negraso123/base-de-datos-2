const express = require("express");

const sqlite = require("sqlite");

const app = express();

let conexion = sqlite.createConnection({
    host: "",
    database: "base-de-datos-2",
    user: "root",
    password: ""

});

app.set("view engine","ejs");

app.get("/", function (req, res){
    res.render("registro");
});

app.post("/validar", function(req,res){
    const datos = req.body;

    let id = datos.id;
    let nombre = datos.nom;
    let apellido = datos.apell;
    let mascota = datos.mas;
    let correo = datos.correo;
    let password = datos.pass;

    let registrar = "INSERT INTO table_usuarios (id, nombre, apellido, mascota, correo, password) VALUES ('"+id+"','"+nombre+"','"+apellido+"','"+mascota+"','"+correo+"','"+password+"')";

    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("datos almacenados correctamente");
        }
    }





);

});

    console.log(datos);

app.listen(3000, function(){
     console.log("servidor creado http://localhost:3000");
    }
);