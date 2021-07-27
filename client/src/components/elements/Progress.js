import React from 'react';
import { useState } from 'react';

const Progress = () => {
    const [progress, setProgress] = useState(37);

    const updateProgress = (progress, value ) => {
        value = Math.round(value);
        progress.querySelector('.progress-fill').style.width = `${value}%`;

        if(progress.querySelector('.progress-text')){
            progress.querySelector('.progress-text').textContent = `${value} %`;
        }
    }

    const addFive = () => {
        const bar1 = document.getElementById('progress1');
        const bar2 = document.getElementById('progress2');
        setProgress(progress + 5);
        updateProgress(bar1, progress);
        updateProgress(bar2, progress);
    }
    

    return (
        <section id="progress" className="mb-10">
            <button className="btn btn-primary" onClick={addFive}>Click to progress</button>
            
            <div className="progress" id="progress1">
                <div className="progress-fill" style={{width:progress+'%'}}></div>
                <div className="progress-text">{progress} %</div>
            </div>

            <div className="progress progress--small" id="progress2">
                <div className="progress-fill" style={{width:progress+'%'}}></div>
            </div>
        </section>
    )
}

export default Progress;
