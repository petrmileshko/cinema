import {
  createElement
} from '../render.js';

const createFilmDetailsContainerTopTemplate = () => '<div class="film-details__top-container"><div class="film-details__close"><button class="film-details__close-btn" type="button">close</button></div></div>';

export default class FilmDetailsContainerTopView {
  getTemplate() {
    return createFilmDetailsContainerTopTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
