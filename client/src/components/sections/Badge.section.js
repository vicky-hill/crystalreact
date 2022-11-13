/* eslint-disable */ 'use strict';
import React from 'react';
import Badge from '../elements/Badge';
import Button from '../elements/Button';

const BadgeSection = () => {

    return (
        <section id="badge">
            <div className="mb-10">

                {/* <Badge badgeText="2" light round>
                      <button className='btn btn-primary'>The Sims 2</button>
                </Badge>

                <h1>Heading</h1><Badge></Badge> */}


                <Badge type="h1" badgeText="New">The Sims 2</Badge>

            </div>

            {/* <div className="mb-10"> */}

                {/* <button className="btn btn-primary">
                    Notification <span className="badge badge--light">7</span>
                </button>
                <button className="btn btn-primary">
                    Posts <span className="badge badge-pill badge--light">45</span>
                </button>

            </div>

            <div>

                <h2>Heading <span className="badge badge--pill">New</span> </h2>
                
            </div> */}
        </section>
    )
}

export default BadgeSection;
