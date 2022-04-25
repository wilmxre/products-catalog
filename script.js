// SLIDES ----- >

const slides = document.querySelector('.slides');
const navigation = document.querySelector('.navigation');

// create slides
for (let i = 0; i < 3; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.setAttribute('id', `pg-${i}`);

  const leftSlide = document.createElement('div');
  leftSlide.classList.add('left-side');

  const slideTitle = document.createElement('div');
  slideTitle.classList.add('slide-title');
  leftSlide.appendChild(slideTitle);

  const slideText = document.createElement('div');
  slideText.classList.add('slide-text');
  slideText.textContent = 'Lorem ipsum dolor sit amet';
  leftSlide.appendChild(slideText);

  slide.appendChild(leftSlide);

  const rightSlide = document.createElement('div');
  rightSlide.classList.add('right-side');

  const slideImage = document.createElement('img');
  slideImage.classList.add('slide-img');
  rightSlide.appendChild(slideImage);

  slide.appendChild(rightSlide);

  slides.appendChild(slide);

  const pg = document.createElement('div');
  pg.classList.add('pg');
  pg.setAttribute('id', `pg-${i}`);
  navigation.appendChild(pg);
}

// initialize slideshow variables
let slideIndex = 2,
  delay = 5000,
  interval = 0;

// console.log(slides.childNodes.length)

// create slideshow
let slideShow = () => {
  for (let i = 0; i < slides.childNodes.length; i++) {
    slides.childNodes[i].classList.add('display-none');
  }

  if (slideIndex > slides.childNodes.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.childNodes.length;
  }

  for (let i = 0; i < navigation.childNodes.length; i++) {
    navigation.childNodes[i].className = navigation.childNodes[i].className.replace(' active', '');
  }

  slides.childNodes[slideIndex - 1].classList.remove('display-none');
  navigation.childNodes[slideIndex - 1].className += ' active';

}

// pause slides when mouse is on the slide
let pauseSlides = () => {
  clearInterval(interval);
}

// go to next slide
let nextSlide = () => {
  slideShow();
  slideIndex++;
}

// start slideshow, with every iteration being delayed
let startSlides = () => {
  pauseSlides();
  nextSlide();
  interval = setInterval(nextSlide, delay);
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', (e) => {
  clearInterval(interval);
  goToPage(slideIndex, -1);
  interval = setInterval(nextSlide, delay);
});

next.addEventListener('click', (e) => {
  clearInterval(interval);
  goToPage(slideIndex, 1);
  interval = setInterval(nextSlide, delay);
});


let goToPage = (page, dir) => {  //dir 1 -> next, dir -1 -> prev
  switch (page) {
    case 2:
      if (dir === 1) {
        changeP(1);
        slideIndex = 3;
      }
      if (dir === -1) {
        changeP(2);
        slideIndex = 4;
      }
      break;
    case 3:
      if (dir === 1) {
        changeP(2);
        slideIndex = 4;
      }
      if (dir === -1) {
        changeP(0);
        slideIndex = 2
      }
      break;
    case 4:
      if (dir === 1) {
        changeP(0);
        slideIndex = 2
      }
      if (dir === -1) {
        changeP(1);
        slideIndex = 3
      }
      break;
    default:
  }
}

changeP = (page) => {
  for (let i = 0; i < slides.childNodes.length; i++) {
    slides.childNodes[i].classList.add('display-none');
    navigation.childNodes[i].classList.remove('active');
  }
  slides.childNodes[page].classList.remove('display-none');
  navigation.childNodes[page].classList.add('active');
}

// change to specified page
let changePages = () => {
  navigation.addEventListener('click', (e) => {
    for (let i = 0; i < slides.childNodes.length; i++) {
      if (navigation.childNodes[i].classList[0] === 'pg' && e.target.classList[0] !== 'navigation') {
        slides.childNodes[i].classList.add('display-none');
        navigation.childNodes[i].classList.remove('active');
      }
      if (e.target.id === slides.childNodes[i].id) {
        slides.childNodes[i].classList.remove('display-none');
        navigation.childNodes[i].classList.add('active');
      }
    }
  });
}

navigation.childNodes[1].classList.add('active');

const setSrc = (elem, field, src) => {
  elem[field] = src;
}

// set slide titles
setSrc(slides.childNodes[0].childNodes[0].childNodes[0], 'textContent', 'Velux');
setSrc(slides.childNodes[1].childNodes[0].childNodes[0], 'textContent', 'Baumit');
setSrc(slides.childNodes[2].childNodes[0].childNodes[0], 'textContent', 'Remmers');

// set slide images
setSrc(slides.childNodes[0].childNodes[1].childNodes[0], 'src', './cards/velux-card.jpeg');
setSrc(slides.childNodes[1].childNodes[1].childNodes[0], 'src', './cards/baumit-card.jpg');
setSrc(slides.childNodes[2].childNodes[1].childNodes[0], 'src', './cards/remmers-card.jpg');

// CARDS ----- >

const cards = document.querySelector('.cards');

for (let i = 0; i < 3; i++) {
  const link = document.createElement('a');
  const link2 = document.createElement('a');

  const card = document.createElement('div');
  card.classList.add(`card-${i}`);

  const title = document.createElement('img');
  title.classList.add(`card-${i}-title`);
  link.appendChild(title);
  card.appendChild(link);

  const img = document.createElement('img');
  img.classList.add(`card-${i}-img`);
  link2.appendChild(img);
  card.appendChild(link2);

  cards.appendChild(card);
}

// set card titles
setSrc(cards.childNodes[0].childNodes[0].childNodes[0], 'src', './logos/velux.svg');
setSrc(cards.childNodes[1].childNodes[0].childNodes[0], 'src', './logos/baumit.png');
setSrc(cards.childNodes[2].childNodes[0].childNodes[0], 'src', './logos/remmers.svg');

// set card images
setSrc(cards.childNodes[0].childNodes[1].childNodes[0], 'src', './cards/velux-card.jpeg');
setSrc(cards.childNodes[1].childNodes[1].childNodes[0], 'src', './cards/baumit-card.jpg');
setSrc(cards.childNodes[2].childNodes[1].childNodes[0], 'src', './cards/remmers-card.jpg');

// set card links
setSrc(cards.childNodes[0].childNodes[0], 'href', 'https://f.hubspotusercontent40.net/hubfs/4623644/Romania/pdf/Lista%20preturi%202022_update_web.pdf?utm_medium=email&_hsmi=89842096&_hsenc=p2ANqtz--1rtQMb92u3npRlx3IQj4LD_p7E93aglfk_M72yLlw30Kje-jq-utQ0CSZhi_ff2lRAbsGzoovJIC9Ff7gqlf7GjqyLw&utm_content=89842096&utm_source=hs_automation')
setSrc(cards.childNodes[0].childNodes[1], 'href', 'https://f.hubspotusercontent40.net/hubfs/4623644/Romania/pdf/Lista%20preturi%202022_update_web.pdf?utm_medium=email&_hsmi=89842096&_hsenc=p2ANqtz--1rtQMb92u3npRlx3IQj4LD_p7E93aglfk_M72yLlw30Kje-jq-utQ0CSZhi_ff2lRAbsGzoovJIC9Ff7gqlf7GjqyLw&utm_content=89842096&utm_source=hs_automation')

setSrc(cards.childNodes[1].childNodes[0], 'href', 'https://baumit.ro/files/ro/brochure/01-21_BAUMIT_Pricelist_RO_2022_pdf-mic_compressed_site.pdf')
setSrc(cards.childNodes[1].childNodes[1], 'href', 'https://baumit.ro/files/ro/brochure/01-21_BAUMIT_Pricelist_RO_2022_pdf-mic_compressed_site.pdf')

setSrc(cards.childNodes[2].childNodes[0], 'href', 'https://www.remmers.hu/hu')
setSrc(cards.childNodes[2].childNodes[1], 'href', 'https://www.remmers.hu/hu')


// LANGUAGE
const ro = document.querySelector('#ro');
const hu = document.querySelector('#hu');

let changeLanguage = (language) => {
  location.hash = language;
  location.reload();
}

let lang = {
  hu: {
    info: 'Rendelésért az elérhetőség:',
    location: 'Csíkszereda',

    //ide az aposztrofok koze kell irni a szoveget kulon-kulon, <= 70 szo
    textVelux: 'Velux szovege magyarul',
    textBaumit: 'Baumit szovege magyarul',
    textRemmers: 'Remmers szovege magyarul',
  },
  ro: {
    info: 'Pentru comanda, detaliile:',
    location: 'Miercurea Ciuc',

    textVelux: 'Velux szovege romanul',
    textBaumit: 'Baumit szovege romanul',
    textRemmers: 'Remmers szovege romanul',
  }
}

// set slide text
setSrc(slides.childNodes[0].childNodes[0].childNodes[1], 'textContent', lang.hu.textVelux);

setSrc(slides.childNodes[1].childNodes[0].childNodes[1], 'textContent', lang.hu.textBaumit);

setSrc(slides.childNodes[2].childNodes[0].childNodes[1], 'textContent', lang.hu.textRemmers);

const infoName = document.querySelector("body > div.container-top > div.info > h2");
const infoLocation = document.querySelector("body > div.container-top > div.info > p:nth-child(3)");

const slideTextVelux = document.querySelector("#pg-0 > div.left-side > div.slide-text");
const slideTextBaumit = document.querySelector("#pg-1 > div.left-side > div.slide-text");
const slideTextRemmers = document.querySelector("#pg-2 > div.left-side > div.slide-text");

if (window.location.hash == '#hu') {
  infoName.textContent = lang.hu.info;
  infoLocation.textContent = lang.hu.location;

  slideTextVelux.textContent = lang.hu.textVelux;
  slideTextBaumit.textContent = lang.hu.textBaumit;
  slideTextRemmers.textContent = lang.hu.textRemmers;
}

else if (window.location.hash == '#ro') {
  infoName.textContent = lang.ro.info;
  infoLocation.textContent = lang.ro.location;

  slideTextVelux.textContent = lang.ro.textVelux;
  slideTextBaumit.textContent = lang.ro.textBaumit;
  slideTextRemmers.textContent = lang.ro.textRemmers;
}

window.onload = () => {
  // remove slide from browser
  slides.childNodes[0].classList.add('display-none');
  slides.childNodes[2].classList.add('display-none');

  slides.setAttribute('onmouseenter', 'pauseSlides()');
  slides.setAttribute('onmouseleave', 'startSlides()');

  ro.addEventListener('click', () => changeLanguage('ro'));
  hu.addEventListener('click', () => changeLanguage('hu'));

  changePages();
  startSlides();
}