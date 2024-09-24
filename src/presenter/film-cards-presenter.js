/**
 * Презентер для управления карточками фильмов
 */
import FilmCardView from '../view/film-card-view.js';

import {
  render
} from '../render.js';

export default class FilmCardsPresenter {

  constructor(count = 0) {
    this._count = count;
  }

  init = (container, films) => {
    this.container = container;

    if (!this._count) {
      for (const film of films) {
        render(new FilmCardView(film), container);
      }
    } else {
      for (let index = 0; index < this._count; index++) {
        render(new FilmCardView(films[index]), container);
      }
    }

  };
}
