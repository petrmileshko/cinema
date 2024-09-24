import UserProfileView from './view/user-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmDetailsPresenter from './presenter/film-details-presenter.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import FilmsModel from './model/film-model.js';

import {
  render
} from './render.js';

import {
  FILMS_COUNT
} from './constants.js';

const siteBody = document.querySelector('body');
const siteMainElement = siteBody.querySelector('.main');
const siteHeaderElement = siteBody.querySelector('.header');
const filmsStatisticElement = siteBody.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();
const filmsDetailsPresenter = new FilmDetailsPresenter();
const films = (new FilmsModel(FILMS_COUNT)).films;
//const films = getFilms.films;

render(new UserProfileView(), siteHeaderElement); // Отрисовка информации о пользователе в шапке сайта
render(new MainNavigationView(), siteMainElement); // отрисовка фильтра/навигации по контенту
render(new SortView(), siteMainElement); // отрисовка сортировки контента
render(new FooterStatisticView(), filmsStatisticElement); // отрисовка статистики в подвале

filmsPresenter.init(siteMainElement, films); // отрисовка контента
//filmsDetailsPresenter.init(siteBody); // отрисовка pop up
