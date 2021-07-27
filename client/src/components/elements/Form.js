import React from 'react';

const Form = () => {

        // File upload
        function realFileClick() {
            const realFileBtn = document.getElementById('real-file');
            realFileBtn.click();
        }
    
        function handleFile() {
            const realFileBtn = document.getElementById('real-file');
            const customText = document.getElementById('custom-text');
    
            if (realFileBtn.value) {
                customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            } else {
                customText.innerHTML = "No file chosen";
            }
        }

    return (
        <>
            {/* Basic Form */}
            <section id="form" className="mb-10" style={{ width: '50%' }}>
                <form>

                    {/* Input */}
                    <div className="input-container">
                        <label htmlFor="input">Username</label>
                        <input className="input" type="text" placeholder="Enter username" />
                    </div>

                    {/* Input Validation */}
                    <div className="input-container">
                        <label htmlFor="input">Password</label>
                        <input className="input valid-feedback" type="password" placeholder="Enter password" value="1234567" onChange={console.log('')} />
                        <small className="valid-feedback">Looks good</small>
                    </div>

                    {/* Select */}
                    <div className="input-container">
                        <label htmlFor="cars">Choose a framework:</label>

                        <select name="cars" id="cars" className="select">
                            <option value="volvo">React</option>
                            <option value="saab">Angular</option>
                            <option value="mercedes">Vue</option>
                        </select>
                    </div>


                    {/* Custom Radio & Checkbox: htmlFor must be the same as input id */}
                    {/* Wrap labels in divs to stack them  */}

                    {/* Radio Button */}
                    <div className="input-container">
                        <label htmlFor="visual" className="radio">
                            <input type="radio" name="radio" id="visual" className="radio-input" />
                            <div className="radio-circle"></div>
                            <div className="radio-label">Visual Studio Code</div>
                        </label>
                        <label htmlFor="atom" className="radio">
                            <input type="radio" name="radio" id="atom" className="radio-input" />
                            <div className="radio-circle"></div>
                            <div className="radio-label"> Atom </div>
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="input-container">
                        <label htmlFor="mac" className="checkbox">
                            <input type="checkbox" name="Studio Visual Code" className="checkbox-input" id="mac" />
                            <div className="checkbox-box"></div>
                            <div className="checkbox-label">Mac</div>
                        </label>
                        <label htmlFor="pc" className="checkbox">
                            <input type="checkbox" name="Studio Visual Code" className="checkbox-input" id="pc" />
                            <div className="checkbox-box"></div>
                            <div className="checkbox-label"> PC </div>
                        </label>
                    </div>

                    {/* Toggle */}
                    <div className="input-container">
                        <label htmlFor="darkmode" className="toggle">
                            <input type="checkbox" id="darkmode" className="toggle-input" />
                            <div className="toggle-fill"></div>
                            <div className="toggle-label">Darkmode</div>
                        </label>
                    </div>

                    {/* Radio Group */}
                    <div className="input-container radio-group">
                        <input className="radio-group-input" type="radio" value="option1" name="myRadio" id="myRadio1" />
                        <label className="radio-group-label" htmlFor="myRadio1"> &nbsp; 5</label>

                        <input className="radio-group-input" type="radio" value="option2" name="myRadio" id="myRadio2" />
                        <label className="radio-group-label" htmlFor="myRadio2">10</label>

                        <input className="radio-group-input" type="radio" value="option3" name="myRadio" id="myRadio3" />
                        <label className="radio-group-label" htmlFor="myRadio3">15</label>
                    </div>

                    {/* File Upload */}
                    <div className="input-container">
                        <input type="file" name="" id="real-file" hidden="hidden" onChange={handleFile} />
                        <button className="btn btn-primary" type="button" id="custom-button" onClick={realFileClick} >Browse</button>
                        <span className="file-label" id="custom-text">No file chosen</span>
                    </div>

                </form>
            </section>

        </>
    )
}

export default Form;
