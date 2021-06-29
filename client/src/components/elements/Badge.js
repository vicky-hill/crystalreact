import React from 'react';

/* Props
=========================================== */
// variant: String | button, pill, h1, h2, h3, h4, h5, h6
// badge: String 

const Badge = ({ children, variant, badge, onClick }) => {

    let element;

    // Heading badge
    if (variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6') {
        variant === 'h1' ? element = <h1>{children} <span className="badge">{badge}</span></h1> :
            variant === 'h2' ? element = <h2>{children} <span className="badge">{badge}</span></h2> :
                variant === 'h3' ? element = <h3>{children} <span className="badge">{badge}</span></h3> :
                    variant === 'h4' ? element = <h4>{children} <span className="badge">{badge}</span></h4> :
                        variant === 'h5' ? element = <h5>{children} <span className="badge">{badge}</span></h5> :
                            variant === 'h6' ? element = <h6>{children} <span className="badge">{badge}</span></h6> :
                                element = <h1>{children} <span className="badge">{badge}</span></h1>
    }

    // Button badge
    if (variant === 'button') {
        element = <button className="btn btn-primary" onClick={onClick}> {children} <span className="badge badge-light">{badge}</span></button>
    }


    // Pill badge
    if (variant === 'pill') {
        element = <h2>{ children } <span className="badge badge-pill">{ badge }</span> </h2>
    }




    return (
        <div>
            {element}
        </div>
    )
}

export default Badge;
