import {
  createElement
} from '../render.js';

const createFilmDetailsContainerBottomTemplate = () => '<div class="film-details__bottom-container"></div>';

export default class FilmDetailsContainerBottomView {
  getTemplate() {
    return createFilmDetailsContainerBottomTemplate();
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
