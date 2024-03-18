import React from 'react'
import '../alert/alert.css'
export default function page() {
    return (
        <>
            <div className='contenidoAlert'>
                <div className='tituloAlert' >Resgistro del Alert</div>
                <form action='#'>
                    <div className='contenidoAlert2'>

                        <div className='inputbox'>
                            <label className='label1'>Nombre</label>
                            <input type='text' id='nombre' className='nombre' />
                        </div>

                        <div className='inputbox'>
                            <label className='label1'>Descripcion</label>
                            <textarea id='descripcion' className='descripcion'></textarea>
                        </div>

                        <div className='inputbox'>
                            <label className='label2'>Hora</label>
                            <input type='time' id='hora' className='hora' />
                        </div>

                        <input type="sumit" value="Registrar" className='boton' />

                    </div>
                </form>
            </div>
        </>
    )
}
