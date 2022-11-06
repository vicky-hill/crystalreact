/* eslint-disable */
import React, { useState } from 'react';
import Button from '../elements/Button';
import Progress from '../elements/Progress';

const ProgressSection = () => {
    const [progress, setProgress] = useState(37);

    // const updateProgress = (progress, value ) => {
    //     value = Math.round(value);
    //     progress.querySelector('.progress-fill').style.width = `${value}%`;

    //     if(progress.querySelector('.progress-text')){
    //         progress.querySelector('.progress-text').textContent = `${value} %`;
    //     }
    // }

    // const addFive = () => {
    //     const bar1 = document.getElementById('progress1');
    //     const bar2 = document.getElementById('progress2');
    //     setProgress(progress + 5);
    //     updateProgress(bar1, progress);
    //     updateProgress(bar2, progress);
    // }

    const addFive = () => {
        setProgress(progress => progress + 5)
    }
    
    return (
        <section id="progress">
            <Button onClick={addFive}>Click to progress</Button>
            <Progress progress={progress} />
            <Progress small progress={progress} />
        </section>
    )
}


export default ProgressSection;
