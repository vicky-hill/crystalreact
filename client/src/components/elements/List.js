import React from 'react';

const List = () => {
    return (
        <section id="list">
            <div className="row">
                <div className="col-6">

                    {/* Basic list */}
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

            <div className="row mb-10">
                <div className="col-6">
                    <ul className="list-group list-group-header">
                        <li className="list-group-item">Featured </li>
                        <li className="list-group-item">Cras justo odio <span className="badge badge-pill">16</span> </li>
                        <li className="list-group-item">Dapibus ac facilisis in <span className="badge badge-pill">22</span></li>
                        <li className="list-group-item">Vestibulum at eros<span className="badge badge-pill">12</span> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default List;
