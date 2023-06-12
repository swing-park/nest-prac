import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './craete-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
