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

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'all movies';
  }

  @Get('search')
  search(@Query('name') name) {
    return `searched : ${name}`;
  }

  @Get(':id')
  getMovie(@Param('id') id: string): string {
    return `${id} : movie`;
  }

  @Post()
  createMovie(@Body() data) {
    return data;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string): string {
    return `Del : ${id}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string, @Body() data) {
    return { id, ...data };
  }
}
