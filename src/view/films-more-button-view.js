import {
  createElement
} from '../render.js';

const createFilmsMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class FilmsMoreButtonView {
  getTemplate() {
    return createFilmsMoreButtonTemplate();
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
