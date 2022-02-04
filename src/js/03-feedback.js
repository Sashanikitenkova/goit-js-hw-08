import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
            // console.log(e.target.name);
            // console.log(e.target.value);
        
            formData[e.target.name] = e.target.value;
            console.log(formData);
        });
    

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput() {
    // console.log(massage);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedMessage);

    if(parsedData) {
        console.log(parsedData); 
        refs.textarea.value = parsedData.message;
        refs.input.value = parsedData.email;
    };
};




// const massage = JSON.stringify(formData);



// Записать в локал сторидж 
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

// Забрать с локал сторидж
//  const saveData = localStorage.getItem(STORAGE_KEY);
//  const parsedData = JSON.parse(saveData);


// refs.form.addEventListener('input', e => {
//         // console.log(e.target.name);
//         // console.log(e.target.value);
    
//         formData[e.target.name] = e.target.value;
//         console.log(formData);
//     });










// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };

// function onTextareaInput(evt) {
//     const massage = evt.target.value;
//     // console.log(massage);

//     localStorage.setItem(STORAGE_KEY, massage);
// };

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if(savedMessage) {
//         console.log(savedMessage); 
//         refs.textarea.value = savedMessage;
//     };
// };