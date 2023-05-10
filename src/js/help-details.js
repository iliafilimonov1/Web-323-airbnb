/* модалка language */
const modal = document.querySelector('#modal-question'); // получение доступа к модалке
const openModals = document.querySelectorAll('#question-btn'); // доступ к кнопке
const closeModal = document.querySelector('.close-button'); // доступ к кнопке Close Modal внутри модалки


openModals.forEach(button => {
  button.addEventListener("click", () => {
    modal.showModal();
  })
})

closeModal.addEventListener("click", () => {
  modal.close();
});