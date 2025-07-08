const openBtn = document.getElementById('openBtn');
const resetBtn = document.getElementById('resetBtn');
const viewContentBtn = document.getElementById('viewContentBtn');
const contentBtnContainer = document.getElementById('contentBtnContainer');
const letter = document.querySelector('.letter');
const hearts = document.querySelector('.hearts');
const bgMusic = document.getElementById('bg-music');

const popup = document.getElementById('popup');
const close = document.querySelector('.close');
const nextPageBtn = document.getElementById('nextPageBtn');

const videoPopup = document.getElementById('videoPopup');
const closeVideo = document.querySelector('.closeVideo');

openBtn.addEventListener('click', () => {
  letter.classList.add('open');
  hearts.classList.add('show');
  bgMusic.play();
  contentBtnContainer.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
  letter.classList.remove('open');
  hearts.classList.remove('show');
  bgMusic.pause();
  bgMusic.currentTime = 0;
  contentBtnContainer.classList.add('hidden');
  popup.classList.add('hidden');
  videoPopup.classList.add('hidden');
});

viewContentBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

close.addEventListener('click', () => {
  popup.classList.add('hidden');
});

nextPageBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  videoPopup.classList.remove('hidden');
});

closeVideo.addEventListener('click', () => {
  videoPopup.classList.add('hidden');
});
