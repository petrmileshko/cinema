import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardsPresenter from './film-cards-presenter.js';

import {
  render
} from '../render.js';

export default class FilmsListPresenter {
  filmsListBox = new FilmsListView();
  filmsTopRatedBox = new FilmsListView('RATED');
  filmsMostCommentedBox = new FilmsListView('COMMENTED');
  filmsListContainer = new FilmsListContainerView();
  filmCards = new FilmCardsPresenter();

  init = (container) => {
    this.container = container;
    render(this.filmsListBox, this.container);
    render(this.filmsTopRatedBox, this.container);
    render(this.filmsMostCommentedBox, this.container);
    render(this.filmsListContainer, this.filmsListBox.getElement());

    this.filmCards.init(this.filmsListContainer.getElement());
  };
}
