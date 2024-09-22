/**
 * Презентер для управления списком комментариев
 */
import FilmCommentView from '../view/film-comment-view.js';

import {
  render
} from '../render.js';

export default class FilmCommentsPresenter {

  init = (container) => {
    this.container = container;

    for (let index = 0; index < 4; index++) {
      render(new FilmCommentView(), this.container); // Отрисовка комментария
    }

  };
}
