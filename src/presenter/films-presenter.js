/**
 * Презентер для управления секцией со списками фильмов
 */
import FilmsBoxView from '../view/films-box-view.js';
import FilmsListPresenter from './films-list-presenter.js';

import {
  render
} from '../render.js';

export default class FilmsPresenter {
  filmsBox = new FilmsBoxView(); // главная секция для списков фильмов
  filmsLists = new FilmsListPresenter(); // презентер для отрисовки всех секций со списками фильмов

  init = (container) => {
    this.container = container;
    render(this.filmsBox, this.container);// Отрисовка главной секции
    this.filmsLists.init(this.filmsBox.getElement()); // заполнение главной секции
  };
}
