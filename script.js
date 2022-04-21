const slides = document.querySelector('.slides');
const navigation = document.querySelector('.navigation');

for (let i = 0; i < 3; i++) {
  const link = document.createElement('a');
  link.href = 'http://www.google.com';

  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.setAttribute('id', `slide-${i} pg-${i}`);
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
  for (let i = 0; i < slides.childNodes.length; i++) {
    if (navigation.childNodes[0].classList[0] === 'pg') {
      slides.childNodes[i].childNodes[0].classList.add('display-none');
    }
    if (e.target.id === slides.childNodes[i].childNodes[0].id.split(' ')[1]) {
      slides.childNodes[i].childNodes[0].classList.remove('display-none');
    }
  }
});

// remove slide from browser
slides.childNodes[1].childNodes[0].classList.add('display-none');
slides.childNodes[2].childNodes[0].classList.add('display-none');

// change text content of slide
const setText = (elem, title) => {
  elem.textContent = title;
}

const setImg = (elem, src) => {
  elem.src = src;
}

setText(slides.childNodes[1].childNodes[0].childNodes[0], 'Baumit')
setText(slides.childNodes[2].childNodes[0].childNodes[0], 'Remerse')


const cards = document.querySelector('.cards');

for (let i = 0; i < 3; i++) {
  const card = document.createElement('div');
  card.classList.add(`card-${i}`);

  const title = document.createElement('img');
  title.classList.add(`card-${i}-title`);
  card.appendChild(title);

  const img = document.createElement('img');
  img.classList.add(`card-${i}-img`);
  card.appendChild(img);

  cards.appendChild(card);
}


// setText(cards.childNodes[0].childNodes[0], 'Velux');
// setText(cards.childNodes[1].childNodes[0], 'Baumit');
// setText(cards.childNodes[2].childNodes[0], 'Remerse');

cards.childNodes[0].childNodes[0].src = './velux.svg';
cards.childNodes[1].childNodes[0].src = './baumit.png';
cards.childNodes[2].childNodes[0].src = './remmers.svg';

setImg(cards.childNodes[0].childNodes[1], './velux-card.jpeg');
setImg(cards.childNodes[1].childNodes[1], 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk');
setImg(cards.childNodes[2].childNodes[1], 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk');