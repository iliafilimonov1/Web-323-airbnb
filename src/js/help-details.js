/* skeleton */
const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(element => {
    element.classList.remove('skeleton');
  })
})

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


/* получение пользовательских данных и их запись в таблицу */

/* данные пользователя */
class Message {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}

/* класс для отрисовки данных в таблице */
class UI {
  static displayMessage() {
    const messages = Store.getMessages(); // есть ли какие-то данные в хранилище?

    messages.forEach(message => UI.addMessagesTolist(message)); // если данные есть, то я их отрисовываю
  }

  static addMessagesTolist(message) {
    const list = document.querySelector('#messages-list'); // доступ к родителю данных, которые будут добавлены

    const row = document.createElement('tr'); // создает тег tr

    row.innerHTML = `
      <td class="w-200">${message.firstName}</td>
      <td class="w-200">${message.lastName}</td>
      <td class="w-200">${message.email}</td>
      <td class="w-200">${message.phone}</td>
      <td class="w-200"><a href="#" class="icon-delete">x</a></td>
    `
    list.appendChild(row);

  }
}


/* класс для хранения данных (при перезагрузке страницы) */
class Store {
  static getMessages() {
    let messages; // переменная для хранения всех сообщение пользователя

    if (localStorage.getItem('messages') === null) {
      messages = []; // если данных нет, создай пустой массив
    } else {
      messages = JSON.parse(localStorage.getItem('messages')); // иначе покажи данные, которые есть
    }

    return messages;
  }

  static addMessage(message) {
    const messages = Store.getMessages();

    messages.push(message); // добавление новых данных в хранилище

    localStorage.setItem('messages', JSON.stringify(messages));

    console.log('Запись добавлена!');
  }
}


// событие при получении данных от пользователя
document.querySelector('#form-modal').addEventListener('submit', (e) => {
  e.preventDefault(); // предотвращение отправки данных для кнопки с типом submit

  // получаю данные от пользователя
  const firstName = document.querySelector('#firstName').value; // получаем имя
  const lastName = document.querySelector('#lastName').value; // получаем фамилию
  const email = document.querySelector('#email').value; // получаем email
  const phone = document.querySelector('#phone').value; // получаем phone

  if (firstName === '' || lastName === '' || email === '' || phone === '') {
    alert('Поля не должны быть пустыми!');
  } else {
    const message = new Message(firstName, lastName, email, phone); // передаю данные полученные от пользователя

    // Добавление переданных данных в UI
    UI.addMessagesTolist(message);

    // Добавление записи в хранилище
    Store.addMessage(message);


  }
})