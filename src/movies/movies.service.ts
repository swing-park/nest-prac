import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: string) {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Not Found : ${id}`);
    }
    return movie;
  }

  deleteMovie(id: string) {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
  }

  createMovie(movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  updateMovie(id: string, data) {
    const movie = this.getMovie(id);
    this.deleteMovie(id);
    this.movies.push({ ...movie, ...data });
  }

  searchMovie(title: string) {
    return this.movies.find((movie) => movie.title === title);
  }
}
