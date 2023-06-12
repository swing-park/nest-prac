import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/craete-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.moviesService.getMovies();
  }

  @Get('search')
  search(@Query('title') title: string) {
    return this.moviesService.searchMovie(title);
  }

  @Get(':id')
  getMovie(@Param('id') id: number) {
    return this.moviesService.getMovie(id);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: number, @Body() data: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, data);
  }
}
