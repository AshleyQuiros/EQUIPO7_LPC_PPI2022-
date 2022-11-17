const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields)=>{
        if(!err) {
            return res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { correo_electronico, Connombre_completotraseña, nombre_usuario, contraseña} = req.body;
  
    let usuario = [ correo_electronico, nombre_completo, nombre_usuario, contraseña];
  
    let nuevoUsuario = `INSERT INTO usuarios( Correo, Nombre completo, Nombre de usuario, Contraseña) 
    VALUES( ?,?,?, SHA1(?))`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;