import { CACHE_MANAGER, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Movie } from "src/entity/movie.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class MoviesService {

    constructor(
        @Inject('MOVIES_REPOSITORY')
        private moviesRepository: Repository<Movie>,
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache,
    ) { }

    async getAllMovies(): Promise<any> {
        const cache = await this.cacheManager.get('all-movies');

        if (!cache) {
            const movies = await this.moviesRepository.find();
            this.cacheManager.set('all-movies', movies)
            return movies;
        }
        return cache
    }

    async addMovie(movie: Movie): Promise<InsertResult> {
        return this.moviesRepository.insert(movie);
    }

    async getMovieById(id: number): Promise<any> {
        const cache = await this.cacheManager.get(`movie-${id}`);

        if (!cache) {
            const movie = await this.moviesRepository.findOne({ where: { id } });
            this.cacheManager.set(`movie-${id}`, movie)
            return movie;
        }

        return cache
    }

    async updateMovie(id: number, movie: Movie): Promise<Movie> {
        const currentMovie = await this.getMovieById(id);

        if (currentMovie === undefined) throw new NotFoundException();

        await this.moviesRepository.update(id, movie);

        return this.getMovieById(id);
    }

    async deleteMovie(id: number): Promise<DeleteResult> {
        const currentMovie = await this.getMovieById(id);

        if (currentMovie === undefined) throw new NotFoundException();

        return this.moviesRepository.delete(id)
    }
}