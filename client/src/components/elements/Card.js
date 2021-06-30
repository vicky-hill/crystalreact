import React from 'react';
import pink from '../../assets/pink.png';
import book from '../../assets/book.png';

const Card = ({ children }) => {
    let comps = {}

    children.forEach(child => {
        comps[child.type.name] = child
    
    })


    return (
        <div className="card card-border-shade">
            { comps.CardHeader }
            <div className="card-body">
                { comps.CardTitle }
                { comps.CardText }
                { comps.CardLink } 

            </div>
        </div>
    )
}


export const CardHeader = ({ children }) => {
    return <div className="card-header"> {children} </div>
}

export const CardTitle = ({ children }) => {
    return <h4 className="card-title"> {children} </h4>
}

export const CardText = ({ children }) => {
    return <p className="card-text">{children}</p>
}

export const CardLink = ({ children, src }) => {
    return <a href={src} className="card-link"> { children } </a>
}


export default Card;
