import React from 'react'
import prevDef from './funcs'

export default function Scroll(props) {
    return (
        <div className='scroll'>
            <p className='scroll-text'>{props.text}</p>
            <p className='scroll-icon'>
                <a href='/#' onClick={prevDef}>
                    <img src="../../arrow.png" alt="arrow"/>
                </a>
            </p>
        </div>
    )
}