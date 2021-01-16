import React from 'react'
import prevDef from './funcs'

function visionChange() {
    const el = document.querySelector('#m')
    const icon = document.querySelector('i')
    if (el.classList.contains('hide')) {
        el.classList.remove('hide')
        icon.classList.remove('fa-infinity')
        icon.classList.add('fa-times')
    } else {
        el.classList.add('hide')
        icon.classList.remove('fa-times')
        icon.classList.add('fa-infinity')
    }
}

export default function ExtraMenu() {
    return (
        <div className='extra'>
            <h3 className='extra-menu-title' onClick={visionChange}><i className="fas fa-infinity icon" />Menu</h3>
            <ul className='extra-menu-list hide' id='m'>
                <li><a href="/#" onClick={prevDef}>Home</a></li>
                <li><a href="/#" onClick={prevDef}>About Me</a></li>
                <li><a href="/#" onClick={prevDef}>Portfolio</a></li>
                <li><a href="/#" onClick={prevDef}>Contact</a></li>
            </ul>
        </div>
    )
}