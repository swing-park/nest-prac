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
  getMovie(@Param('id') id: string) {
    return this.moviesService.getMovie(id);
  }

  @Post()
  createMovie(@Body() data) {
    return this.moviesService.createMovie(data);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteMovie(id);
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string, @Body() data) {
    return this.moviesService.updateMovie(id, data);
  }
}
