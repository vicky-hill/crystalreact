import React from 'react';
import beach1 from '../../assets/beach-1.jpg';
import beach2 from '../../assets/beach-2.jpg';
import beach3 from '../../assets/beach-3.jpg';

const Photos = () => {
    return (
        <div className="mb-10">
            <div className="row">
                <div className="col-6">
                <div className="composition">
                <img src={beach1} alt="" className="composition-photo photo-1"/>
                <img src={beach2} alt="" className="composition-photo photo-2"/>
                <img src={beach3} alt="" className="composition-photo photo-3"/>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Photos