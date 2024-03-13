import React from 'react'
import '../user/user.css'
export default function user() {
  return (
    <>
      <div className="contenido">
        <div className='titulo'>Registro de  Usuario</div>
        <form action="#">
          <div className='contenido2'>
            <div className='inputbox'>
              <label className='label'>Nombre</label>
              <input type="text" id="nombre" className="nombre" />
            </div>

            <div className='inputbox'>
              <label className='label'>Apellido</label>
              <input type="text" id="apellido" className="apellido" />
            </div>

            <div className='inputbox'>
              <label className='label'>Tipo de identificacion</label>
              <input type="text" id="identidad" className="identidad" />
            </div>

            <div className='inputbox'>
              <label className='label'>Numero de identificacion</label>
              <input type="number" id="numeroidentidad" className="numeroidentidad" />
            </div>

            <div className='inputbox'>
              <label className='label'>Telefono</label>
              <input type="number" id="telefono" classNamee="telefono" />
            </div>

            <div className='inputbox'>
              <label className='label'>Email</label>
              <input type="text" id="usuario" classNamee="usuario" />
            </div>

            <div className='inputbox'>
              <label className='label'>Fecha de nacimiento</label>
              <input type="date" id="fechaNacimiento" classNamee="fechaNacimiento" />
            </div>

            <div className='inputbox'>
              <label className='label'>Direccion</label>
              <input type="text" id="direccion" className="direccion" />
            </div>

            <div className='inputbox'>
              <label className='label'>Contraseña</label>
              <input type="password" id="contrasena" className="contrasena" />
            </div>

            <div className='inputbox'>
              <label className='label'>Foto de Perfil</label>
              <input type="text" id="fotoperfil" className="fotoperfil" />
            </div>

            <div className='inputbox'>
              <label className='label'>Rol</label>
              <input type="text" id="rol" className="rol" />
            </div>

            <div className='inputbox'>
              <label className='label'>Certificado</label>
              <input type="text" id="certificado" className="certificado" />
            </div>

            <input  type="submit" value="Registrar" className='boton' />
          </div>
        </form>

      </div>
    </>
  )
}
