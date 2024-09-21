import UserProfileView from './view/user-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsBoxView from './presenter/films-presenter.js';

import {
  render
} from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const filmsBox = new FilmsBoxView();

render(new UserProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);

filmsBox.init(siteMainElement);
