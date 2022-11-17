const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM trabajadores', (err, rows, fields)=>{
        if(!err) {
            return res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { correo_electronico, numero_movil, nombre_completo, contraseña, cedula, ubiacion_estudio} = req.body;
  
    let utrabajador = [ correo_electronico, numero_movil, nombre_completo, contraseña, cedula, ubiacion_estudio];
  
    let nuevoTrabajador = `INSERT INTO trabajadores( Correo, Número móvil, Nombre completo, Contraseña, Cedula, Ubiacion del estudio) 
    VALUES( ?,?,?, SHA1(?),?,?)`;
    
    mysqlConnection.query(nuevoTrabajador, trabajador, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro trabajador`})
        }
    });
  
  });
