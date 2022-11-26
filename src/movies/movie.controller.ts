import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Movie } from "src/entity/movie.entity";
import { MoviesService } from "./movie.service";

@Controller()
export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    getAllMovies(): Promise<Movie[]> {
        return this.moviesService.getAllMovies();
    }

    @Get(':id')
    getMovieById(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.getMovieById(Number(id));
    }

    @Post()
    addMovie(@Body() movie: Movie) {
        return this.moviesService.addMovie(movie);
    }

    @Put(':id')
    updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
        return this.moviesService.updateMovie(Number(id), movie);
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string) {
        return this.moviesService.deleteMovie(Number(id));
    }

}