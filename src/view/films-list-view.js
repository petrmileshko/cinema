import {
  createElement
} from '../render.js';

const createFilmsListTemplate = (listType = '') => {
  let listTemplate = '<section class="films-list"><h2 class="films-list__title visually-hidden">All movies. Upcoming</h2></section>';

  switch (listType) {
    case 'RATED':
      listTemplate = '<section class="films-list films-list--extra"><h2 class="films-list__title">Top rated</h2></section>';
      break;
    case 'COMMENTED':
      listTemplate = '<section class="films-list films-list--extra"><h2 class="films-list__title">Most commented</h2></section>';
      break;
    default:
      break;
  }
  return listTemplate;
}

export default class FilmsListView {

  constructor(listType = '') {
    this.listType = listType;
  }

  getTemplate() {
    return createFilmsListTemplate(this.listType);
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
