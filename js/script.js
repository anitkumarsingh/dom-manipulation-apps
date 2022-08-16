'use strict';

const selectBtn = document.querySelectorAll('.btn');
const selectModal = document.querySelector('.modal');
const selectCloseBtn = document.querySelector('.btn-close');
const selectOverlay = document.querySelector('.modal-overlay');

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener('click', function () {
    console.log(selectBtn[i].textContent);
    selectModal.classList.remove('hidden');
    selectOverlay.classList.remove('hidden');
  });
}

const closeModal  = () =>{
  selectModal.classList.add('hidden');
  selectOverlay.classList.add('hidden');
}
selectCloseBtn.addEventListener('click', closeModal);
selectOverlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
 if(e.key==='Escape'){
  closeModal();
 }
})