import React from 'react'
import Menu from './Menu'
import Scroll from './Scroll'
import ExtraMenu from './ExtraMenu'

export default function Home() {
    return (
        <section className='home'>
            <Menu />
            <ExtraMenu />
            <Scroll text="scroll down to see more"/>
        </section>
    )
}