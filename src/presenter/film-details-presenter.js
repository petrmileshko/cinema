/**
 * Презентер для управления всплывающим окном с детальным описанием фильма и обратной связью
 */
import FilmDetailsView from '../view/film-details-view.js';
import FilmDetailsFormView from '../view/film-details-form-view.js';
import FilmDetailsContainerTopView from '../view/film-details-container-top-view.js';
import FilmDetailsContainerBottomView from '../view/film-details-container-bottom-view.js';
import FilmDetailsContControlsView from '../view/film-details-controls-view.js';
import FilmDetailsInfoView from '../view/film-details-info-view.js';

import {
  render
} from '../render.js';

export default class FilmDetailsPresenter {
  /**пустые контейнеры */
  filmsDetailsBox = new FilmDetailsView(); // родительский контейнер pop-up окна
  filmsDetailsForm = new FilmDetailsFormView(); // контейнер форма
  filmDetailsContainerTopView = new FilmDetailsContainerTopView(); // верхний контейнер
  filmDetailsContainerBottomView = new FilmDetailsContainerBottomView(); // нижний контейнер

  init = (container) => {
    this.container = container;
    render(this.filmsDetailsBox, this.container);
    render(this.filmsDetailsForm, this.filmsDetailsBox.getElement());
    render(this.filmDetailsContainerTopView, this.filmsDetailsForm.getElement());
    render(this.filmDetailsContainerBottomView, this.filmsDetailsForm.getElement());
    render(new FilmDetailsInfoView(), this.filmDetailsContainerTopView.getElement());
    render(new FilmDetailsContControlsView(), this.filmDetailsContainerTopView.getElement());
  };
}
