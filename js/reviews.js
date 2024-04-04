//Используем библиотеку jquery и пишем сами в ручную слайдер отзывов
const Card = document.querySelectorAll('.content_reviews-card-container .content_rev-cont .content_reviews-card-block'); //Берем все элементы с классом content_reviews-card-block и запихиваем в константу
const SliderCont = document.querySelector('.content_rev-cont'); //блок содержащий карточки отзывов

let count = 0;
let width;

//функция расчета ширины блока, и карт относительно ширены блока
function init() {
  console.log('resize');
  width = document.querySelector('.content_reviews-card-container').offsetWidth;
  SliderCont.style.width = width * Card.lenght + 'px';
  Card.forEach(item => {
    item.style.width = (width) + 'px';
    item.style.heght = 'auto';
  });
  console.log(width);
  Rolslider();// это мы запихали функцию двигания слайдера
}
window.addEventListener('resize' ,init)
init();

//листание в права
document.querySelector('.content_reviews-arrows-r').addEventListener('click', function () {
    count++;
    if (count >= Card.length) {
      count = 0;
    }
    Rolslider();
});

//листание в лево
document.querySelector('.content_reviews-arrows-l').addEventListener('click', function () {
    count--;
    if (count < 0) {
      count = Card.length - 1;
    }
    Rolslider();
});
//функция сдвига карточек в слайдере
function Rolslider () {
    SliderCont.style.transform = 'translate(-' + count * width  + 'px)';
};