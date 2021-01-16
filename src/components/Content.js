import React from 'react'

export default function Content() {
    return (
        <div className='content'>
            <div className='image'>
                <img className='firstP' src="../../photo.png" alt="myphoto"/>
                <img className='secondP' src="../../photo_mini.png" alt="myphoto-mini"/>
            </div>
            <div className='me'>
                <h2 className="title">About Me</h2>
                <div>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <p className='text'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <h3 className="sub">Jason Wood</h3>
            </div>
        </div>
    )
}