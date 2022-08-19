import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state'
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY))

const formData = {...parsedData};


const refs = {
    form: document.querySelector('.js-feedback-form'),
};

populateForm()

refs.form.addEventListener('input', throttle(onFormInput, 500))
refs.form.addEventListener('submit', onFormSubmit)


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();

    const email = evt.currentTarget.email.value
    const message = evt.currentTarget.message.value
    
    const data = { email, message }
    console.log(data)
    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
    }


function populateForm() {
    const savedMessage = parsedData;
    
    if (savedMessage) {
        const arrayOfItems = Object.entries(savedMessage);

    arrayOfItems.forEach((item) => {
        refs.form.elements[item[0]].value = item[1]
    })
}
}
