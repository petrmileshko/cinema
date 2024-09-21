import FilmCardView from '../view/film-card-view.js';

import {
  render
} from '../render.js';

import {
  FILMS_COUNT
} from '../constants.js';

export default class FilmCardsPresenter {

  init = (container) => {
    this.container = container;
    for (let index = 0; index < FILMS_COUNT; index++) {
      render(new FilmCardView(), this.container);
    }
  };
}
