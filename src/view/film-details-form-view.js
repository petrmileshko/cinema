import {
  createElement
} from '../render.js';

const createFilmDetailsFormTemplate = () => '<form class="film-details__inner" action="" method="get"></form>';

export default class FilmDetailsFormView {
  getTemplate() {
    return createFilmDetailsFormTemplate();
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
