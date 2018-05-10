import { Film, CinemaHall, FilmScreening } from './entities';


export default (filmName, duration, cinemaHallName, rows, cols, time) => {
  const film = new Film(filmName, duration);
  const cinemaHall = new CinemaHall(cinemaHallName, rows, cols);
  const filmscreening = new FilmScreening(film, cinemaHall, time);

  return filmscreening;
};
