const slides = document.querySelector('.slides');
const navigation = document.querySelector('.navigation');

for (let i = 0; i < 3; i++) {
  const link = document.createElement('a');
  link.href = 'http://www.google.com';

  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.setAttribute('id', `slide-${i}`);
  link.appendChild(slide);
  slides.appendChild(link);

  const slideTitle = document.createElement('div');
  slideTitle.classList.add('slide-title');
  slideTitle.textContent = 'Velux';
  slide.appendChild(slideTitle);
  link.appendChild(slide);
  slides.appendChild(link);

  const slideImage = document.createElement('img');
  slideImage.src = 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk';
  slideImage.classList.add('slide-img');
  slide.appendChild(slideImage);
  link.appendChild(slide);
  slides.appendChild(link);

  const pg = document.createElement('div');
  pg.classList.add('pg');
  pg.setAttribute('id', `pg-${i}`);
  navigation.appendChild(pg);
}

navigation.addEventListener('click', (e) => {

});