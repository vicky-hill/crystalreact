import React from 'react';

const Tabs = () => {

    const openTab = (e) => {
        if(e.target.classList.contains('tabs-item')) {
            const tabs = document.getElementsByClassName('tabs-item');
            const tabContent = document.getElementsByClassName('tab-pane');
    
            // Close all tabs that aren't the target
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i] !== e.target) {
                    tabs[i].classList.remove('active');
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.remove('active')
                } else {
                    tabs[i].classList.add('active');
                    tabContent[i].classList.add('active');
                    setTimeout(() => { tabContent[i].classList.add('show');}, 150);
                }
            }
        }
    }


    return (
        <div className="mb-10">
            <div className="tabs" onClick={openTab}>
                <div className="tabs-item active">Item 1</div>
                <div className="tabs-item">Item 2</div>
                <div className="tabs-item">Item 3</div>
            </div>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="first">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sapiente quidem quibusd</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sun.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
                </div>
                <div className="tab-pane fade" id="second">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sunt! Magnam</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
                </div>
                <div className="tab-pane fade" id="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sunt! Magnam</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum exercitationem dolorum architecto consectetur ducimus dolorem vitae corporis, magnam possimus quo iure laudantium temporibus voluptatum nisi delectus, ipsa earum, veritatis fugiat saepe. Quae rerum delectus tempore, obcaecati illo numquam neque.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;
