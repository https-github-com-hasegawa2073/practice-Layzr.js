import Layzr from '../node_modules/layzr.js/dist/layzr.module.js';

const grid = new Muuri('.grid');

const instance = Layzr({
  normal: 'data-normal',
  threshold: 0,
});

instance.on('src:before', (element) => {
  element.addEventListener('load', function () {
    element.classList.add('is-active');
    console.log(this);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  instance.update().check();
});
