import React from 'react'
import css from './User.module.css'

export default function User(props) {
        const {user} = props
        const {name,login, picture} = user
        return (
            <div className={css.flexRow}>
                <img className={css.avatar} src={picture.large} alt={name.first}/>
                <span key={login.uuid}>{name.first}</span>
            </div>
        )
}
