'use strict';

///////////////////////////////////////
// Modal window

const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// create message element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'Click button to delete the element <button class="btn btn--class--cookie">Got It</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));

// event for one button
// document.querySelector('.btn--class--cookie').addEventListener('click', () => message.parentElement.removeChild(message))

// events for all buttons, use NodeList from querySelectorAll
// document.querySelectorAll('.btn--class--cookie').forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     const msgs = document.querySelectorAll('.cookie-message');
//     msgs.forEach(el => el.remove());
//   });
// });

// events for all buttons, use HTMLCollection from getElementsByClassName
// !!! note, remove from HTMLCollection doesn't work correctly

// header.append(message.cloneNode(true));
// header.append(message.cloneNode(true));
Array.prototype.map.call(
  document.getElementsByClassName('btn--class--cookie'),
  function (btn) {
    btn.addEventListener('click', function () {
      Array.prototype.map.call(
        document.getElementsByClassName('cookie-message'),
        el => el.remove()
      );
    });
  }
);

message.style.backgroundColor = 'lightgreen';
// console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // const btncoords = e.target.getBoundingClientRect();
  // window.scrollTo({
  //   'left': s1coords.left + window.scrollX,
  //   'top': s1coords.top + window.scrollY,
  //   'behavior': 'smooth'});

  section1.scrollIntoView({ behavior: 'smooth' });
});

// One event for each element
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.stopPropagation()
//     const id = el.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })

// one event for all elements on their common parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (e.target.classList.contains('.nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('.highlight');
// console.log(h1);
const sybls = h1.parentElement.children;
// console.log(sybls);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

h1.closest('.header').style.background = `var(--gradient-primary)`;

// sticky bar, old way
const nav = document.querySelector('.nav');
// const sectCoord = section1.getBoundingClientRect();
// window.addEventListener('scroll', function() {
//   if (sectCoord.top <= window.scrollY)
//     nav.classList.add('sticky')
//   else
//     nav.classList.remove('sticky')
// })

// sticky bar, Intersection Observer

const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) nav.classList.remove('sticky');
  else nav.classList.add('sticky');
};
const navHeight = nav.getBoundingClientRect().height;
const observer = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

// reveal hidden sections
const obscall = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const observer1 = new IntersectionObserver(obscall, {
  root: null,
  threshold: 0.2,
});

const sections = document.querySelectorAll('.section');
sections.forEach(function (section) {
  section.classList.add('section--hidden');
  observer1.observe(section);
});

//Lazy loading images

const lzimgs = document.querySelectorAll('img.lazy-img');
const imgupd = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function (e) {
    e.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const observer2 = new IntersectionObserver(imgupd, {
  root: null,
  threshold: 0.2,
  rootMargin: '-200px',
});
lzimgs.forEach(img => observer2.observe(img));

// Implement sleders
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currSlide = 0;
const dotContainer = document.querySelector('.dots');

const showSlide = function (inx) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - inx) * 100}%)`)
  );
};

const prevSlide = function () {
  if (currSlide === 0) currSlide = maxSlide - 1;
  else currSlide--;
  showSlide(currSlide);
  activateDot(currSlide);
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) currSlide = 0;
  else currSlide++;
  showSlide(currSlide);
  activateDot(currSlide);
};

const createDots = function (_, i) {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      'beforeEnd',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add('dots__dot--active');
};

const maxSlide = slides.length;
btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
  activateDot(currSlide)
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currSlide = e.target.dataset.slide;
    showSlide(currSlide);
    activateDot(currSlide);
  }
});

const sliderInit = function () {
  createDots();
  showSlide(0);
  activateDot(0);
};

sliderInit();
