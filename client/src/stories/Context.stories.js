import Context from '../components/elements/Context'
import React from 'react'
import '../main.scss'

export default {
    title: "Components/Context",
    component: Context
}

const Template = ({ ...args }) => {
   
    return (
        <Context>
            <p className='my-3'>Right click to open Context</p>
        </Context>
    )
}

export const Default = Template.bind({})
Default.args = {
   
}
