export default class {
  constructor(){
    this.films = [];
  }

  save(film) {
    this.films = [...this.films, film];
  }

  find(id) {
    return this.films.find(item => item.id === id);
  }
}
