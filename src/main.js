import UserProfileView from './view/user-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FooterStatisticView from './view/footer-statistic-view.js';

import {
  render
} from './render.js';

const siteBody = document.querySelector('body');
const siteMainElement = siteBody.querySelector('.main');
const siteHeaderElement = siteBody.querySelector('.header');
const filmsStatisticElement = siteBody.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();

render(new UserProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new FooterStatisticView(), filmsStatisticElement);

filmsPresenter.init(siteMainElement);
