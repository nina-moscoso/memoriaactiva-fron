import React from 'react'
import '../role/role.css'
export default function page() {
    return (
        <>
            <div className="contenido">
                <div className='titulo'>Registro del Rol</div>
                <form action="#">
                    <div className='contenido2'>
                        <div className='inputbox'>
                            <label className='label'>Nombre</label>
                            <input type="text" id="nombre" className="nombre" />
                        </div>

                        <div className='inputbox'>
                            <label className='label'>Descripción</label>
                            <textarea id="descripcion" className="descripcion"></textarea>
                        </div>

                        <input type="submit" value="Registrar" className='boton' />
                    </div>
                </form>
            </div>
        </>
    )
}
