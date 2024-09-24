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

  init = (container, films) => {
    this.container = container;
    console.log(films);
    /*
    for (let index = 0; index < films.length; index++) {
      const film = films[index];
      render(new FilmCardView(film), this.container);
      console.log(film);
    }*/
  };
}
