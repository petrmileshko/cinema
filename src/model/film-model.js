import {
  generateFilm
} from '../mock/film.js';

export default class FilmsModel {

  constructor(count) {
    this._films = Array.from({
      length: count
    }, generateFilm);
  }

  get films() {
    return this._films;
  }
}
