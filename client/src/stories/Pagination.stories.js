import Pagination from '../styles/basic/elements/Pagination'
import React, { useState } from 'react'
import '../main.scss'


export default {
    title: "Basic/Pagination",
    component: Pagination
}

const Template = ({ ...args }) => {
    const [active, setActive] = useState(0)

    return <div id="style--basic"><Pagination active={active} setActive={setActive} {...args} /></div>
}

export const Default = Template.bind({})
Default.args = {
    pages: 5
}