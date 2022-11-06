import Pagination from '../components/elements/Pagination'
import React, { useState } from 'react'
import '../main.scss'


export default {
    title: "Components/Pagination",
    component: Pagination
}

const Template = ({ ...args }) => {
    const [active, setActive] = useState(0)

    return <Pagination active={active} setActive={setActive} {...args} />
}

export const Default = Template.bind({})
Default.args = {
    pages: 5
}