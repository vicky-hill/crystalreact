import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../../utils/getClassName';

const Tabs = ({ children, className, ...props }) => {

    const [active, setActive] = useState(0);

    const variations = {

    }

    const openTab = (e) => {
        setActive(Number(e.target.id));
    }

    return (
        <div className="tabs">
            <div className="tabs__header" onClick={openTab}>
                <div id={0} className={`tabs__item ${active === 0 ? 'active' : ''}`}>Tab 1</div>
                <div id={1} className={`tabs__item ${active === 1 ? 'active' : ''}`}>Tab 2</div>
                <div id={2} className={`tabs__item ${active === 2 ? 'active' : ''}`}>Tab 3</div>
            </div>

            <div className="tabs__content">
                <div id="tab-0" className={`tab-pane fade-in ${active === 0 ? 'show active' : ''}`}>
                    Content of Tab 1
                </div>
                <div id="tab-1" className={`tab-pane fade-in ${active === 1 ? 'show active' : ''}`}>
                    Content of Tab 2
                </div>
                <div id="tab-2" className={`tab-pane fade-in ${active === 2 ? 'show active' : ''}`}>
                    Content of Tab 3
                </div>
            </div>
        </div>
    )
}

export const Tab = (props) => <div className='card-header'>something</div>;


Tabs.defaultProps = {

}

Tabs.propTypes = {

}

export default Tabs;