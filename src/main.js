import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { renderImages } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';
// import axios from 'axios';

const fetchImageForm = document.querySelector('.search-form');
const formInput = document.querySelector('.search-input');
const formBtn = document.querySelector('.search-btn');
const imagesListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
});

fetchImageForm.addEventListener('submit', async event => {
  event.preventDefault();
  currentQuery = formInput.value.trim();

  if (!currentQuery) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  imagesListEl.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');
  currentPage = 1;
  loader.classList.add('active');

  try {
    const data = await fetchImage(currentQuery, currentPage);
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

    if (data.totalHits > 15) {
      loadMoreBtn.classList.remove('is-hidden');
    }
    smoothScroll();
  } catch (error) {
    loader.classList.remove('active');
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
    console.error('Error fetching data:', error);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  loader.classList.add('active');

  try {
    const data = await fetchImage(currentQuery, currentPage);
    loader.classList.remove('active');
    if (data.hits.length > 0) {
      imagesListEl.insertAdjacentHTML('beforeend', renderImages(data.hits));
      lightbox.refresh();
      smoothScroll();
    }
    if (currentPage * 15 >= data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    loader.classList.remove('active');
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
    console.error('Error fetching data:', error);
  }
});

const smoothScroll = () => {
  const { height: cardHeight } =
    imagesListEl.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
