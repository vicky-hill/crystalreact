/* eslint-disable */ 'use strict';
import React from 'react';
import Badge from '../elements/Badge';
import Button from '../elements/Button';

const BadgeSection = () => {

    return (
        <section id="badge">
            <div className="mb-10">
                <Badge type="h1" badgeText="New">Header</Badge>
                <Badge type="h3" badgeText="New">Header</Badge>
                <Badge type="h4" badgeText="New">Header</Badge>
                <Badge type="h5" badgeText="New">Header</Badge>
            </div>

            <div className="mb-10">
                <Badge type="button" badgeText="45" light>Notification</Badge>
                <Badge type="button" badgeText="45" light round>Notification</Badge>
            </div>

            <div>
               <Badge type="h2" badgeText="New" pill>Header</Badge>
               <Badge type="h3" badgeText="New" pill>Header</Badge>
            </div> 
        </section>
    )
}

export default BadgeSection;
