import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "src/entity/movie.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class MoviesService {

    constructor(
        @Inject('MOVIES_REPOSITORY')
        private moviesRepository: Repository<Movie>
    ) { }

    async getAllMovies(): Promise<Movie[]> {
        return this.moviesRepository.find();
    }

    async addMovie(movie: Movie): Promise<InsertResult> {
        return this.moviesRepository.insert(movie);
    }

    async getMovieById(id: number): Promise<Movie> {
        return this.moviesRepository.findOne({ where: { id } });
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