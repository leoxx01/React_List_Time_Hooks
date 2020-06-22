import React, { useState, useEffect } from 'react'
import User from './User'

export default function Users(props){
    const [secondsVisible, setsecondsVisible] = useState(0)

    useEffect(() => { //Aplicando efeito
        const interval = setInterval(()=>{
            setsecondsVisible(secondsVisible + 1)
        },1000)
        return () => {//Limpando efeito
            clearInterval(interval)
        }
    }, [secondsVisible])//Declaramos que vamo monitorar
   
        const {users} = props
        return (
            <div>
            <p>Componente Users Visible por {secondsVisible} segundos</p>
               <ul>{users.map(user =>{
                   const {login} = user
                   return <li key={login.uuid}><User user={user}/></li>
                })}
               </ul>
            </div>
        )
}
