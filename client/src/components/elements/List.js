import React from 'react';

const List = () => {
    return (
        <>
            <div className="row">
                <div className="col-5">

                    {/* Basic list */}
                    <h4 className="mb-5">Basic List</h4>
                    <ul className="list-group list-group-header">
                        <li className="list-group-item">Featured</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">Featured</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Featured </li>
                        <li className="list-group-item">Cras justo odio <span className="badge badge-pill">16</span> </li>
                        <li className="list-group-item">Dapibus ac facilisis in <span className="badge badge-pill">22</span></li>
                        <li className="list-group-item">Vestibulum at eros<span className="badge badge-pill">12</span> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default List;
