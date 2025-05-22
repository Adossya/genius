window.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.hero__label').forEach(label => {
    const input = label.querySelector('.hero__input'),
          placeholder = label.querySelector('.hero__placeholder'),
          nameInput = document.querySelector('input[name="name"]'),
          emailInput = document.querySelector('input[name="email"]'),
          form = document.querySelector('.hero__form');

    nameInput.addEventListener('input', () => {
        if (isValidName(nameInput.value)) {
        nameInput.classList.remove('error');
        nameInput.classList.add('valid');
    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('error');
    }
    });

    emailInput.addEventListener('input', () => {
        if (isValidEmail(emailInput.value)) {
        emailInput.classList.remove('error');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('error');
    }
    });



    input.addEventListener('focus', () => {
      placeholder.classList.add('active');
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        if(input === phoneInput){
          return
        }
        placeholder.classList.remove('active');
      }
    });
  });

    function isValidName(value) {
        const regex = /^[A-Za-zА-ЩЬЮЯЄІЇҐа-щьюяєіїґ' -]+$/;
        return regex.test(value.trim());
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const phoneInput = document.querySelector('input[name="phone"]');

    const iti = window.intlTelInput(phoneInput, {
        initialCountry: 'ua',
        preferredCountries: ['ua', 'kz'],
         validationNumberTypes: [],
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js', 
    });


    if (iti.getSelectedCountryData()) {
        phoneInput.value = '+' + iti.getSelectedCountryData().dialCode;
    }
        phoneInput.addEventListener('countrychange', () => {
    const countryData = iti.getSelectedCountryData();
    

    });
    function validatePhone() {
    const value = phoneInput.value.trim();


    const digitsCount = value.replace(/\D/g, '').length; 

    if (digitsCount >= 12) {
        // Можем считать, что номер достаточно длинный
        phoneInput.classList.remove('error');
        phoneInput.classList.add('valid');
        return true;
    } else {
        // Недостаточно цифр
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('error');
        return false;
    }
    }

    phoneInput.addEventListener('blur', () => {

    validatePhone();
    });
    phoneInput.addEventListener('change', validatePhone);
    phoneInput.addEventListener('keyup', validatePhone);

    form.addEventListener('submit', function (e) {
    if (!validatePhone()) {
        e.preventDefault();
    }
    });


});
