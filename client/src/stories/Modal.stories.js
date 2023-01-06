import Modal from '../styles/basic/elements/Modal'
import React, { useState } from 'react'
import '../main.scss'

export default {
    title: "Basic/Modal",
    component: Modal
}

const Template = ({ ...args }) => {
    const [modal, setModal] = useState(true)

    return (
        <div id="style--basic">
            <Modal open={modal} close={() => setModal(false)} {...args}>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates, nulla consequatur doloremque nam voluptatibus. Repellat distinctio maxime accusamus culpa!</p>
            </Modal>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    title: 'Modal'
}
