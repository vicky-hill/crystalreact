import React, { useEffect, useState } from 'react';
import Prism from "prismjs";
import buttonSnippets from '../../snippets/button.snippets';
import CodeBox from '../elements/CodeBox';
import Button from '../elements/Button';


const ButtonSection = () => {

    const [loading, setLoading] = useState(false);
    const toggleLoading = () => setLoading(prev => !prev);

    const toggleSpinner = () => {
        document.getElementById('loading-button').classList.toggle('btn-loading');
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <section id="buttons">
            {/* <CodeBox codeTabs={buttonSnippets}> */}
                <Button>Button</Button>

                <Button loading={loading} onClick={toggleLoading}>Loading Button</Button>

                <Button outline>Outline Button</Button>

                <Button rounded outline>Rounded Button</Button>

                <button className="btn--floating">
                    <i className="fas fa-plus"></i>
                </button>
            {/* </CodeBox> */}
        </section>
    )
}



export default ButtonSection;