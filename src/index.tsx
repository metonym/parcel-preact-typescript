import { h, render } from 'preact';
import App from './App';

const $root = document.getElementById('root') as HTMLElement;

render(<App />, $root);
