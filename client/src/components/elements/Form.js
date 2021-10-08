import React from 'react';

const Form = () => {

    // Awesome Form
    function focusFunc(e) {
        let parent = e.target.parentElement;
        parent.classList.add('focus');
    }

    function blurFunc(e) {
        let parent = e.target.parentElement;

        if (e.target.value === "") {
            parent.classList.remove('focus');
        }
    }

    return (
        <div className="mb-10">
            <div className="row">
                <div className="col-5">
                    {/* Awesome Form */}
                    <div className="mb-10">
                        <h4 className="mb-5">Awesome Form</h4>
                        <form className="form_awesome">
                            <div className="input-container_awesome">
                                <input autoComplete="off" type="text" name="name" id="name" className="input_awesome" onFocus={focusFunc} onBlur={blurFunc} />
                                <label htmlFor="name">Name</label>
                                <span>Name</span>
                            </div>
                            <div className="input-container_awesome textarea_awesome" onFocus={focusFunc} onBlur={blurFunc} >
                                <textarea name="message" className="input_awesome" />
                                <label htmlFor="message">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Submit" className="btn_awesome" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
