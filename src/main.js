import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { renderImages } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';

const fetchImageForm = document.querySelector('.search-form');
const formInput = document.querySelector('.search-input');
const formBtn = document.querySelector('.search-btn');
const imagesListEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
});

fetchImageForm.addEventListener('submit', event => {
  const loader = document.querySelector('.loader');
  event.preventDefault();
  const query = formInput.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  imagesListEl.innerHTML = '';
  loader.classList.add('active');

  fetchImage(query)
    .then(data => {
      loader.classList.remove('active');

      if (data.total === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      imagesListEl.insertAdjacentHTML('beforeend', renderImages(data.hits));
      lightbox.refresh();
    })
    .catch(error => {
      loader.classList.remove('active');
      iziToast.error({
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching data:', error);
    });
});
