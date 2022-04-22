const slides = document.querySelector('.slides');
const navigation = document.querySelector('.navigation');

for (let i = 0; i < 3; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.setAttribute('id', `slide-${i} pg-${i}`);

  const slideTitle = document.createElement('div');
  slideTitle.classList.add('slide-title');
  slideTitle.textContent = 'Velux';
  slide.appendChild(slideTitle);

  const slideImage = document.createElement('img');
  slideImage.src = 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk';
  slideImage.classList.add('slide-img');
  slide.appendChild(slideImage);
  slides.appendChild(slide)

  const pg = document.createElement('div');
  pg.classList.add('pg');
  pg.setAttribute('id', `pg-${i}`);
  navigation.appendChild(pg);
}

let changePages = () => {
  navigation.addEventListener('click', (e) => {
    console.log(e.target.classList[0])
    for (let i = 0; i < slides.childNodes.length; i++) {
      if (navigation.childNodes[i].classList[0] === 'pg' && e.target.classList[0] !== 'navigation') {
        console.log(1)
        slides.childNodes[i].classList.add('display-none');
      }
      if (e.target.id === slides.childNodes[i].id.split(' ')[1]) {
        slides.childNodes[i].classList.remove('display-none');
      }
    }
  });
}

// change text content of slide
const setText = (elem, title) => {
  elem.textContent = title;
}

const setSrc = (elem, field, src) => {
  elem[field] = src;
}

setText(slides.childNodes[1].childNodes[0].childNodes[0], 'Baumit')
setText(slides.childNodes[2].childNodes[0].childNodes[0], 'Remerse')


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

window.onload = () => {
  // remove slide from browser
  slides.childNodes[1].classList.add('display-none');
  slides.childNodes[2].classList.add('display-none');

  changePages();
}