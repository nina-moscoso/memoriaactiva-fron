import React from 'react'
import '../user/user.css'
import axios from 'axios';

export default function user() {
 const [nombre,setNombre] = useState("");
 const [apellido, setApellido] = useState("");
 const [tipoIdentificacion, setTipodeidentificacion] = useState("");
 const [numeroIdentificacion, setNumerodeidentificacion] = useState("");
 const [telefono, setTelefono] = useState("");
 const [email, setEmail] = useState("");
 const [fechaNacimiento, setFechadenacimiento] = useState("");
 const [direccion, setDireccion] = useState("");
 const [contraseña, setContraseña] = useState("");
 const [fotoperfil, seFotoperfil] = useState("");
 const [rol, setRol] = useState("");
 const [certificado, setCertificado] = useState("");

 const baseUrl = "http://localhost:3001"
 
 const handleChange = (e) => {
  const { id, value } = e.target;
  switch (id) {
  }
 const Submit = async (e) => {
   e.preventDefault();

   //console.log(name, lastName, email, password);

   const result = await axios.post(`${baseUrl}api/user`, {
     nombre,
     apellido,
     tipoIdentificacion,
     numeroIdentificacion,
     telefono,
     email,
     fechaNacimiento,
     direccion,
     contraseña,
     fotoperfil,
     rol,
     certificado,
   })
    return (
      <>
        <div className="contenido">
          <div className='titulo'>Registro de  Usuario</div>
          <form action="#">
            <div className='contenido2'>
              <div className='inputbox'>
                <label className='label'>Nombre</label>
                <input type="text" id="nombre" className="nombre" onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Apellido</label>
                <input type="text" id="apellido" className="apellido" onChange={(e) => setApellido(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Tipo de identificacion</label>
                <input type="text" id="identidad" className="identidad" onChange={(e) => setTipodeidentificacion(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Numero de identificacion</label>
                <input type="number" id="numeroidentidad" className="numeroidentidad" onChange={(e) => setNumerodeidentificacion(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Telefono</label>
                <input type="number" id="telefono" classNamee="telefono" onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Email</label>
                <input type="text" id="usuario" classNamee="usuario" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Fecha de nacimiento</label>
                <input type="date" id="fechaNacimiento" classNamee="fechaNacimiento" onChange={(e) => setFechadenacimiento(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Direccion</label>
                <input type="text" id="direccion" className="direccion" onChange={(e) => setDireccion(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Contraseña</label>
                <input type="password" id="contrasena" className="contrasena" onChange={(e) => setContraseña(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Foto de Perfil</label>
                <input type="text" id="fotoperfil" className="fotoperfil" onChange={(e) => seFotoperfil(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Rol</label>
                <input type="text" id="rol" className="rol" onChange={(e) => setRol(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Certificado</label>
                <input type="text" id="certificado" className="certificado" onChange={(e) => setCertificado(e.target.value)} />
              </div>

              <div className='inputbox'>
                <label className='label'>Estado</label>
                <input type="text" id="estado" className="estado" onChange={(e) => setEstado(e.target.value)} />
              </div>

              <input type="submit" value="Registrar" className='boton' onChange={(e) => Submit(e.target.value)} />
            </div>
          </form>

        </div>
      </>
    )
  }

}