import 'babel-polyfill';
import './polifils';

import './../sass/styles.sass';

import Select from './classes/Select';
import Input from './classes/Input';
import Datapicker from './classes/Datapicker';
import Validation from './classes/Validation';
import Modal from './classes/Modal';

document.addEventListener('DOMContentLoaded', () => {
    new Select();
    new Input();
    new Datapicker();
    new Validation();
    new Modal();
})

// const styleSelect = require('styleSelect')


// styleSelect('select.selectselect')