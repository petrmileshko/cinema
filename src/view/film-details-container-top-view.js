import {
  createElement
} from '../render.js';

const createFilmDetailsContainerTopTemplate = () => '<div class="film-details__top-container"></div>';

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
