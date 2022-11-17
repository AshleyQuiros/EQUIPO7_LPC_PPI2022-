import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioTrabajador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                id: '',
                correo_electronico: '',
                numero_movil: '',
                nombre_completo: '',
                contraseña: '',
                cedula: '',
                ubiacion_estudio: ''
            }
        }
    }

    peticionGet = () => {
        axios.get('http://localhost:4001/api/trabajadores')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/trabajadores', this.state.form)
            .then(response => {
                alert(`Bienvenido`)

            }).catch(error => {
                console.log(error.message);
            })

    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        // const datosForm = this.state.form;
        const data = this.state.datos;
        console.log(data)

        return (

            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" className="form-control" name="correo_electronico" id="email" placeholder="you@example.com" onChange={this.handleChange} value={data.correo_electronico}></input>
                    </div>

                    <div className="mb-3">
                        <label>Número móvil</label>
                        <input type="email" className="form-control" name="numero_movil" id="email" placeholder="numero" onChange={this.handleChange} value={data.numero_movil}></input>
                    </div>
                        <div className="col-md-6 mb-3">
                            <label >Nombre Completo</label>
                            <input type="text" className="form-control" name="nombre_completo" id="Trabajador" placeholder="Nombre Completo" required="" onChange={this.handleChange} value={data.nombre_completo}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" name="contraseña" id="Contrasena" onChange={this.handleChange} value={data.contraseña}></input>
                    </div>
                    <div className="mb-3">
                        <label>Cedula</label>
                        <input type="password" className="form-control" name="cedula" id="Cedula" onChange={this.handleChange} value={data.cedula}></input>
                    </div>
                    <div className="mb-3">
                        <label>Ubicacion del estudio</label>
                        <input type="password" className="form-control" name="ubiacion_estudio" id="Ubicacion" onChange={this.handleChange} value={data.ubiacion_estudio}></input>
                    </div>
    
                    <hr className="mb-4"></hr>
                    <Link to="/trabajador">
                        <button className="btn btn-outline-primary btn-lg btn-block" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrate</font></button>
                    </Link>
                </form>
            </div>

        );
    }
}

export default FormularioTrabajador;