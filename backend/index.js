const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/usuarios');
const trabajadores = require('./routes/trabajadores');


//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))
app.set('port' ,process.env.PORT || 4001);

app.use(express.json());


//rutas
app.use('/api/usuarios',routes);
app.use('/api/trabajadores', trabajadores);



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});