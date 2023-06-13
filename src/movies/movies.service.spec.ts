import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Get all movies', () => {
    it('should return an array', () => {
      const ret = service.getMovies();
      expect(ret).toBeInstanceOf(Array);
    });
  });

  describe('Get one Movie', () => {
    it('should return a movie', () => {
      service.createMovie({
        title: 'test',
        year: 2023,
        genres: ['test'],
      });
      const movie = service.getMovie(1);
      expect(movie).toBeDefined();
    });

    it('should throw a NotFoundException', () => {
      try {
        service.getMovie(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('Delete one movie', () => {
    it('should delete a movie', () => {
      service.createMovie({
        title: 'test',
        year: 2023,
        genres: ['test'],
      });
      const beforeDel = service.getMovies().length;
      service.deleteMovie(1);
      const afterDel = service.getMovies().length;

      expect(afterDel).toBeLessThan(beforeDel);
    });

    it('should throw a NotFoundException', () => {
      try {
        service.deleteMovie(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('Create one movie', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getMovies().length;
      service.createMovie({
        title: 'test',
        year: 2023,
        genres: ['test'],
      });
      const afterCreate = service.getMovies().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('Update one movie', () => {
    it('should update a movie', () => {
      service.createMovie({
        title: 'test',
        year: 2023,
        genres: ['test'],
      });

      service.updateMovie(1, { title: 'update test' });

      const movie = service.getMovie(1);
      expect(movie.title).toEqual('update test');
    });

    it('should throw a NotFoundException', () => {
      try {
        service.updateMovie(999, { title: 'update test' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
