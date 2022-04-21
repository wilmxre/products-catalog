const middle = document.querySelector('.middle-section');

for (let i = 0; i < 3; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  middle.appendChild(slide);

  const slideTitle = document.createElement('div');
  slideTitle.classList.add('slide-title');
  slideTitle.textContent = 'Velux';
  slide.appendChild(slideTitle);

  const slideImage = document.createElement('img');
  slideImage.src = 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk';
  slideImage.classList.add('slide-img');
  slide.appendChild(slideImage);
}


