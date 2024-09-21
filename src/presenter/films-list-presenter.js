/**
 * Презентер для управления списками карточек фильмов
 */
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsMoreButtonView from '../view/films-more-button-view.js';
import FilmCardsPresenter from './film-cards-presenter.js';

import {
  render
} from '../render.js';

import {
  FILMS_COUNT,
  TOP_RATED_COUNT,
  MOST_COMMENTED_COUNT
} from '../constants.js';

export default class FilmsListPresenter {

  filmsListBox = new FilmsListView(); // компонент список фильмов
  filmsTopRatedBox = new FilmsListView('RATED'); // компонент со списком фильмов с высоким рейтингом
  filmsMostCommentedBox = new FilmsListView('COMMENTED'); // компонент со списком самых обсуждаемых фильмов

  filmsListContainer = new FilmsListContainerView(); // контейнер для фильмов в списке
  filmsListContainerTopRated = new FilmsListContainerView(); // контейнер для фильмов из списка высокого рейтинга
  filmsListContainerMostCommented = new FilmsListContainerView(); // контейнер для фильмов из списка самых обсуждаемых

  filmCards = new FilmCardsPresenter(FILMS_COUNT); // Презентер всех фильмов
  filmCardsTopRated = new FilmCardsPresenter(TOP_RATED_COUNT); // Презентер для фильмов с высоким рейтингом
  filmCardsMostCommented = new FilmCardsPresenter(MOST_COMMENTED_COUNT); // Презентер для самых обсуждаемых фильмов

  init = (container) => {
    this.container = container;
    /** Выводим компонент списка фильмов */
    render(this.filmsListBox, this.container);
    render(this.filmsListContainer, this.filmsListBox.getElement());
    /** Выводим компонент списка фильмов с высоким рейтингом */
    render(this.filmsTopRatedBox, this.container);
    render(this.filmsListContainerTopRated, this.filmsTopRatedBox.getElement());
    /** Выводим компонент списка самых обсуждаемых фильмов */
    render(this.filmsMostCommentedBox, this.container);
    render(this.filmsListContainerMostCommented, this.filmsMostCommentedBox.getElement());

    this.filmCards.init(this.filmsListContainer.getElement()); //Заполняем карточками контейнер для списка всех фильмов
    this.filmCardsTopRated.init(this.filmsListContainerTopRated.getElement()); //Заполняем карточками контейнер для списка самых обсуждаемых фильмов
    this.filmCardsMostCommented.init(this.filmsListContainerMostCommented.getElement()); //Заполняем карточками контейнер для списка фильмов с высоким рейтингом

    render(new FilmsMoreButtonView(), this.filmsListBox.getElement()); // Отрисовка компонента с кнопкой показать больше фильмов
  };
}
