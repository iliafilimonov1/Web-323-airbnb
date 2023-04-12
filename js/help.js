/* button-airbnb */
const button = document.querySelector('.btn-airbnb')
button.addEventListener('mousemove', e => {
  const rect = button.getBoundingClientRect();
  console.log(rect);
  const x = (e.clientX - rect.left) * 100 / button.clientWidth
  const y = (e.clientY - rect.top) * 100 / button.clientHeight
  button.style.setProperty('--mouse-x', x);
  button.style.setProperty('--mouse-y', y);
})


/* handler for header active */
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.nav-link.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  })
})


/* dropdown */
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

/* открытие/закрытие списка */
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdown-show');
})

// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown__menu') && !event.target.closest('.dropdown__button')) {
    dropdownMenu.classList.remove('dropdown-show');
  }
})

// закрытие меню по клику на пункт
const dropdownMenuItems = document.querySelectorAll('.dropdown__menu-item')
dropdownMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('dropdown-show');
  })
})



