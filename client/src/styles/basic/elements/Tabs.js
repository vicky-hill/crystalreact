import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({ children, className }) => {

    const [active, setActive] = useState(0);

    const getTabItemClasses = index => classNames('tabs__item', {
        'active': active === index
    });

    const getTabContentClasses = index => classNames('tab-pane fade-in', {
        'show active': active === index
    })


    const openTab = (e) => {
        setActive(Number(e.target.id));
    }

    return (
        <div className="tabs">
            <div className="tabs__header" onClick={openTab}>
                <div id={0} className={getTabItemClasses(0)}>Tab 1</div>
                <div id={1} className={getTabItemClasses(1)}>Tab 2</div>
                <div id={2} className={getTabItemClasses(2)}>Tab 3</div>
            </div>

            <div className="tabs__content">
                <div className={getTabContentClasses(0)}>
                    Content of Tab 1
                </div>
                <div className={getTabContentClasses(1)}>
                    Content of Tab 2
                </div>
                <div className={getTabContentClasses(2)}>
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