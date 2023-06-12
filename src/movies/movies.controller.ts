import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'all movies';
  }

  @Get('/:id')
  getMovie(@Param('id') id: string): string {
    return `${id} : movie`;
  }

  @Post()
  createMovie() {
    return 'create movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `Del : ${id}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string) {
    return `Patch : ${id}`;
  }
}
