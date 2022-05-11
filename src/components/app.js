import './app.css';
import { Keyboard } from './keyboard';
export function app(){
    // global.console.log('Helo my');
    const txtar = document.createElement('textarea');
    txtar.setAttribute('rows','14');
    document.body.appendChild(txtar);
    document.body.appendChild(Keyboard());
}