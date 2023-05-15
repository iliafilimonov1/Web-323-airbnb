/* модалка ask a question (flex) */
const modal = document.querySelector('#modal-question'); // получение доступа к модалке
const openModal = document.querySelector('.btn-ask'); // доступ к кнопке
const closeModal = document.querySelector('.close-button'); // доступ к кнопке Close Modal внутри модалки


openModal.addEventListener("click", () => {
  modal.showModal();
})

closeModal.addEventListener("click", () => {
  modal.close();
});