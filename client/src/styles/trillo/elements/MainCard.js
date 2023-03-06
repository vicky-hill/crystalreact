import React from 'react'
import user3 from '../../../assets/user-3.jpg'
import user4 from '../../../assets/user-4.jpg'
import user5 from '../../../assets/user-5.jpg'
import user6 from '../../../assets/user-6.jpg'

const MainCard = () => {
    return (
        <div className="card-main">
            <p className="card-main-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta ducimus unde quisquam voluptates consequatur eaque dignissimos, doloribus quae esse! Officiis obcaecati eveniet libero sed.
            </p>
            <p className="card-main-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum laborum error ducimus quos eligendi.
            </p>

            <ul className="card-main-list">
                 <li className="list-item">Close to the beach</li>
                 <li className="list-item">Breakfast included</li>
                 <li className="list-item">Free airport shuttle</li>
                 <li className="list-item">Free wifi</li>
                 <li className="list-item">Air conditioning</li>
                 <li className="list-item">Pets allowed</li>
                 <li className="list-item">We speak all languages</li>
                 <li className="list-item">Perfect for families</li>
            </ul>

            <div className="card-main-footer">
                <p className="card-main-count">Lucy and 3 others recommend this hotel</p>
                <div className="card-main-images">
                    <img src={user3} alt="" className="card-main-photo"/>
                    <img src={user4} alt="" className="card-main-photo"/>
                    <img src={user5} alt="" className="card-main-photo"/>
                    <img src={user6} alt="" className="card-main-photo"/>
                </div>
            </div>
        </div>
    )
}

export default MainCard;
