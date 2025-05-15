window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.hero__label').forEach(label => {
    const input = label.querySelector('.hero__input');
    const placeholder = label.querySelector('.hero__placeholder');

    input.addEventListener('focus', () => {
        placeholder.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            placeholder.classList.remove('active');
        }
        });
    });

    document.querySelector('.hero__form').addEventListener('submit', function (e) {
    let isValid = true;

    this.querySelectorAll('.hero__label').forEach(label => {
        const input = label.querySelector('.hero__input');

        if (!input.checkValidity()) {
            label.classList.add('error');
            isValid = false;
        } else {
            label.classList.remove('error');
        }
    });


    });
})
