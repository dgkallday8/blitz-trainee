import React from 'react'
import prevDef from './funcs'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul className='menu-list'>
                <li><a href="/#" onClick={prevDef}>Home</a></li>
                <li><a href="/#" onClick={prevDef}>About Me</a></li>
                <li><a href="/#" onClick={prevDef}>Portfolio</a></li>
                <li><a href="/#" onClick={prevDef}>Contact</a></li>
            </ul>
        </nav>
    )
}