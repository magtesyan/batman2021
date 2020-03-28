'use strict';

var moreBtn = document.querySelector('.info__more');
var mainContent = document.querySelector('.main__content');
var navList = document.querySelector('.nav');
var articles = document.querySelectorAll('.main-info__article');
var trailerModal = document.querySelector('.modal_trailer');
var trailerModalLink = document.querySelector('.info__trailer');
var iframe = trailerModal.querySelector('iframe');

var onTrailerLinkClick = function(evt) {
  evt.preventDefault();
  trailerModal.classList.remove('hidden');
};

var closePlayer = function () {
  iframe.src = iframe.src;
  trailerModal.classList.add('hidden')
};

moreBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainContent.classList.toggle('hidden');
});

navList.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('nav-list__item')) {
    navList.querySelector('.nav-list__item_active').classList.remove('nav-list__item_active');
    evt.target.classList.toggle('nav-list__item_active');

    articles.forEach(function(element) {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
      if (element.classList.contains('main-info__article_' + evt.target.id)) {
        element.classList.remove('hidden');
      }
    })
  }
});

trailerModalLink.addEventListener('click', onTrailerLinkClick);

document.addEventListener('click', function(evt) {
  if (!evt.target.classList.contains('info__trailer') && !trailerModal.classList.contains('hidden')) {
    closePlayer();
  }
});

document.addEventListener('keydown', function () {
  if (event.key === 'Escape') {
    closePlayer();
  }
});
