import FilmsBoxView from '../view/films-box-view.js';
import FilmsListPresenter from './films-list-presenter.js';

import {
  render
} from '../render.js';

export default class FilmsPresenter {
  filmsBox = new FilmsBoxView();
  filmsLists = new FilmsListPresenter();

  init = (container) => {
    this.container = container;
    render(this.filmsBox, this.container);
    this.filmsLists.init(this.filmsBox.getElement());
  };
}
