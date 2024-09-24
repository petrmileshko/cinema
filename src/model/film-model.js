import {
  generateFilm
} from "../mock/film.js";

export default class FilmsModel {
  _films = Array.from({
    length: 3
  }, generateFilm);


  get films() {
    return this._films;
  }
}
