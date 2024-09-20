import {
  render
} from '../render.js';

export default class FilmsPresenter {
  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render();
  }
}
