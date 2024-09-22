import {
  createElement
} from '../render.js';

const createFilmCommentsListTemplate = () => '<ul class="film-details__comments-list"></ul>';

export default class FilmCommentsListView {
  getTemplate() {
    return createFilmCommentsListTemplate();
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
