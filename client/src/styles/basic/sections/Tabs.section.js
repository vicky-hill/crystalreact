/* eslint-disable */
import React, { useState } from 'react';
import Tabs, { Tab } from '../elements/Tabs';

const TabsSection = ({ content }) => {

    const [active, setActive] = useState(0);

    const openTab = (e) => {
        setActive(Number(e.target.id));
    }

    return (
        <section id="tabs">
            <Tabs>
                <Tab />
            </Tabs>
        </section>
    )
}

export default TabsSection;
