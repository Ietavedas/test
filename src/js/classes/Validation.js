export default class Validation {
    constructor() {
        this.formElements = document.querySelectorAll('[validation]');
        this.submit = document.querySelector('.js-submit');

        this.init();
    }

    init() {
        this.submit.addEventListener('click', this.clickHandler.bind(this));
    }

    clickHandler(event) {
        const model = [];
        this.formElements.forEach(element => {
            let val = element.value.trim();
            model.push(!!val)
        });
        const invalid = model.filter(el => el === false);
        console.log(model)
        if(invalid.length !== 0 ) {
            return event.preventDefault();
        }
        return true;
    }
}