import React from 'react'

export default function Scroll() {
    return (
        <div className='scroll'>
            <p className='scroll-text'>scroll down to see more</p>
            <p className='scroll-icon'>
                <a href='#'>
                    <img src="../../arrow.png" alt="arrow"/>
                </a>
            </p>
        </div>
    )
}