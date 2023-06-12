import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/craete-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number) {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Not Found : ${id}`);
    }
    return movie;
  }

  deleteMovie(id: number) {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  createMovie(movie: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  updateMovie(id: number, data: UpdateMovieDto) {
    const movie = this.getMovie(id);
    this.deleteMovie(id);
    this.movies.push({ ...movie, ...data });
  }

  searchMovie(title: string) {
    return this.movies.find((movie) => movie.title === title);
  }
}
