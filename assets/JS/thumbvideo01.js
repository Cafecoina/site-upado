const mediaContainer = document.querySelector('.media-container');
const image = document.querySelector('.fullscreen-image');
const video = document.querySelector('.fullscreen-video');

image.addEventListener('click', () => {
  image.style.display = 'none';
  video.style.display = 'block';

  // setando o tamanho do contêiner do vídeo para manter a mesma proporção da imagem
  const aspectRatio = video.offsetWidth / video.offsetHeight;
  mediaContainer.style.paddingBottom = `${(1 / aspectRatio) * 100}%`;
});

video.addEventListener('click', () => {
  video.style.display = 'none';
  image.style.display = 'block';
});