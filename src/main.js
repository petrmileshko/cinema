import UserProfileView from './view/user-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';

import {
  render
} from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(new UserProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
