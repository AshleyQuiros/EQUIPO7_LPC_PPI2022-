import React from "react";
import logo from '../Imagenes/logo 2.jpg';
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function Iniciosesion() {
  return (
    
      <div className="row">
        <img src={logo} alt="logo 2" className="mx-auto" style={{ maxWidth: "300px" }} />

        <div className="container pb-3">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <div class="card oscura">
              <div class="card-header">
                <b>Iniciar sesión</b>
              </div>
              <div class="card-body">
                <form action="/homeL" method="get">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo electronicos</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Escriba su nombre Correo electronico</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                  </div>
                  <Link to="/homel">
                    <button type="button" class="btn btn-warning">entrar</button>
                  </Link>

                </form>
              </div>
            </div>
            <div className="container">
              <div className="mx-auto">
                <p className="text-center">¿No tienes una cuenta?
                  <Link to="/cuenta">Create una cuenta</Link>
                </p>




              </div>
            </div>

          </div>

        </div>

      </div>
    
  );

}
export default Iniciosesion;