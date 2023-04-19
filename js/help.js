import { ModalLogin } from "./modal-login.js";

const modalLogin = new ModalLogin();


/* skeleton */
const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(element => {
    element.classList.remove('skeleton');
  })
})


/* button-airbnb */
const buttonsAirBnb = document.querySelectorAll('.btn-airbnb');

buttonsAirBnb.forEach((button) => {
  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left) * 100 / button.clientWidth;
    const y = (e.clientY - rect.top) * 100 / button.clientHeight;
    button.style.setProperty('--mouse-x', x);
    button.style.setProperty('--mouse-y', y);
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


/* tabs */
window.onload = () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".tabs-btn");
  const tabsContent = document.querySelectorAll(".tabs__content");

  if (tabs) {
    const line = document.querySelector(".line");

    // Устанавливаем начальную ширину линии при загрузке страницы
    line.style.width = tabsBtn[0].clientWidth + "px";
    line.style.left = tabsBtn[0].offsetLeft + "px";

    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs-btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => el.classList.remove("tabs_btn--active"));
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add("tabs_btn--active");
        tabsHandler(tabsPath);
        line.style.width = e.target.clientWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => el.classList.remove("tabs__content--active"));
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  };
};



