import {
  createElement
} from '../render.js';

const createFilmsListContaineTemplate = () => '<div class="films-list__container"></div>';

export default class FilmsListContainerView {
  getTemplate() {
    return createFilmsListContaineTemplate();
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
