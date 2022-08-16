// import '../css/common.css'
// import '../css/03-feedback.css'

const refs = {
    form: document.querySelector('feedback-form'),
    textarea: document.querySelector("feedback-form textarea"),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
    evt.preventDefauil();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}


function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback-form-state', message)
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-state');

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}
