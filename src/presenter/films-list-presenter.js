import FilmsListView from '../view/films-list-view.js';

import {
  render
} from '../render.js';

export default class FilmsListPresenter {
  filmsListBox = new FilmsListView();
  filmsTopRatedBox = new FilmsListView();
  filmsMostCommentedBox = new FilmsListView();

  init = (container) => {
    this.container = container;
    render(this.filmsListBox, this.container);
    render(this.filmsTopRatedBox, this.container);
    render(this.filmsMostCommentedBox, this.container);
  };
}
