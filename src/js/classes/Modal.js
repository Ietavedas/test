export default class Modal {
    constructor() {
        this.link = document.querySelector('[registration]');
        this.modal = document.querySelector('[registration-modal]');
        this.overlay = document.querySelector('.overlay');
        this.body = document.querySelector('body');

        this.init()
    }

    init() {
        this.link.addEventListener('click', this.open.bind(this));
    }

    open() {
        this.modal.classList.add('modal--visible');
        this.overlay.classList.add('visible');
        this.body.classList.add('fixed');

        this.modalSroll();
    }

    modalSroll() {
        const modalHeight = this.modal.clientHeight;
        const windowHeight = window.innerHeight;
        console.log(modalHeight, windowHeight);
    }
}