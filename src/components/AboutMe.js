import React from 'react'
import Menu from './Menu'
import Content from './Content'
import Scroll from './Scroll'

export default function AboutMe() {
    return (
        <section className='about'>
            <Menu />
            <Content />
            <Scroll text="keep scrolling, there is still more to come."/>
        </section>
    )
}