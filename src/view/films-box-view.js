import {
  createElement
} from '../render.js';

const createFilmsBoxTemplate = () => '<section class="films"></section>';

export default class FilmsBoxView {
  getTemplate() {
    return createFilmsBoxTemplate();
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
