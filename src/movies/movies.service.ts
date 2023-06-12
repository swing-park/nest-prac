import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: string) {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteMovie(id: string) {
    return this.movies.filter((movie) => movie.id !== parseInt(id));
  }

  createMovie(movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  searchMovie(title: string) {
    return this.movies.find((movie) => movie.title === title);
  }
}
