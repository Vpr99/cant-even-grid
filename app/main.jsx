import React from 'react';
import ReactDOM from 'react-dom';
import Tester from './component';

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Tester />, app);
}
