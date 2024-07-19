'use strict';
// FAQ
const showAnswer = document.querySelectorAll('.answer');
const question = document.querySelectorAll('.question-content');

question.addEventListener('click', () => {
  showAnswer.forEach((e) => {
    removeHidden();
  });
});

function removeHidden() {
  
}