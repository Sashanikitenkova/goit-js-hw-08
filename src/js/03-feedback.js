import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: '',
    message: '',
};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//             // console.log(e.target.name);
//             // console.log(e.target.value);
        
//             formData[e.target.name] = e.target.value;
//             console.log(formData);
//         });
    

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    const formEl = evt.currentTarget.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;
    if (!email || !message) {
       alert("Все поля должны быть заполненны");
       return;
    };

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(e) {

    formData[e.target.name] = e.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    console.log(savedMessage); 
    const parsedData = JSON.parse(savedMessage);

    if(parsedData) {
        // console.log(parsedData); 
        refs.textarea.value = parsedData.message;
        refs.input.value = parsedData.email;
    };
};






// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//             // console.log(e.target.name);
//             // console.log(e.target.value);
        
//             formData[e.target.name] = e.target.value;
//             console.log(formData);
//         });
    

// populateTextarea();

// function onFormSubmit(e) {
//     e.target.email.preventDefault();
//     e.target.message.preventDefault();

//     if (!e.target.email || !e.target.message) {
//         alert("Все поля должны быть заполненны");
//         return;
//      }
     
//     e.currentTarget.email.reset();
//     e.currentTarget.message.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };

// function onTextareaInput() {

//     // console.log(massage);

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     const parsedData = JSON.parse(savedMessage);

//     if(parsedData) {
//         console.log(parsedData); 
//         refs.textarea.value = parsedData.message;
//         refs.input.value = parsedData.email;
//     };
// };















