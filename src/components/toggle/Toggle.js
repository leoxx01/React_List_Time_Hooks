import React from 'react'

export default function Toggle(props){
    const handleChange = (event) =>{
        
        const {onToggle} = props
        const isChecked = event.target.checked

        onToggle(isChecked)
    }
        const {enable} = props
        return (
            <div>
                 <div className="switch">
                    <label>
                        Mostrar Usuarios
                        <input type='checkbox' checked={enable} onChange={handleChange}/>
                        <span className='lever'></span>
                    </label>
                </div>
            </div>
        )
}
