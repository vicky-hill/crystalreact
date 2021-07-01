import React from 'react';

const Form = () => {
    return (
        <div className="mb-10">
            <div className="row">
                <div className="col-6">
                    <div className="form">
                        <div className="form-group">
                            <input autocomplete="off" type="text" placeholder="Name" id="name" className="input"/>
                            <label htmlFor="name" className="label">Name</label>
                        </div>
                        <div className="form-group">
                            <input autocomplete="off" type="text" placeholder="Email" id="email" className="input"/>
                            <label htmlFor="email" className="label">Email</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form