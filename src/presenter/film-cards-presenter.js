/**
 * Презентер для управления карточками фильмов
 */
import FilmCardView from '../view/film-card-view.js';

import {
  render
} from '../render.js';

export default class FilmCardsPresenter {

  constructor(filmsCoumt = 0) {
    this.filmsCoumt = filmsCoumt;
  }

  init = (container) => {
    this.container = container;
    for (let index = 0; index < this.filmsCoumt; index++) {
      render(new FilmCardView(), this.container);
    }
  };
}
