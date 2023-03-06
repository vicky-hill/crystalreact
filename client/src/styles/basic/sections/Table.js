/* eslint-disable */
import React from 'react'

const Table = () => {
    
    const openLink = (e) => {
        window.location.href = e.target.parentElement.getAttribute('data-href');
    }
    
    return (
        <section id="table">
            <div className="table-container">
            <table className="table sticky">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Team</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody onClick={openLink}>
                    <tr data-href="https://www.google.com">
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,100</td>
                        <td>dcode</td>
                        <td>Los Angeles</td>
                        <td>USA</td>
                    </tr>
                    <tr className="active">
                        <td>2</td>
                        <td>Sally</td>
                        <td>70,100</td>
                        <td>Students</td>
                        <td>Paris</td>
                        <td>France</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nick</td>
                        <td>52,300</td>
                        <td>dcode</td>
                        <td>London</td>
                        <td>England</td>
                    </tr>
                    <tr data-href="https://www.google.com">
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,100</td>
                        <td>dcode</td>
                        <td>Rome</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sally</td>
                        <td>70,100</td>
                        <td>Students</td>
                        <td>Madrid</td>
                        <td>Spain</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nick</td>
                        <td>52,300</td>
                        <td>dcode</td>
                        <td>Berlin</td>
                        <td>Germany</td>
                    </tr>
                    <tr data-href="https://www.google.com">
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,100</td>
                        <td>dcode</td>
                        <td>Venice</td>
                        <td>Italy</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </section>
    )
}

export default Table;
