import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Movie } from "src/entity/movie.entity";
import { MoviesService } from "./movie.service";

@ApiTags('movies')
@Controller()
export class MoviesController {
    constructor(

        private moviesService: MoviesService
    ) { }

    @ApiOperation({
        description: 'Se autenticado, esta rota será responsável por listar todos os filmes'
    })
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllMovies(): Promise<Movie[]> {
        return this.moviesService.getAllMovies();
    }

    @ApiOperation({
        description: 'Se autenticado, esta rota será responsável por listar um filme específico desde que seu id seja passado como parâmetro na rota'
    })
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getMovieById(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.getMovieById(Number(id));
    }

    @ApiOperation({
        description: 'Se autenticado, esta rota será responsável por adicionar um novo filme'
    })
    @UseGuards(AuthGuard('jwt'))
    @Post()
    addMovie(@Body() movie: Movie) {
        return this.moviesService.addMovie(movie);
    }

    @ApiOperation({
        description: 'Se autenticado, esta rota será responsável por atualizar os dados de um filme cadastrado desde que seu id seja passado como parâmetro'
    })
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
        return this.moviesService.updateMovie(Number(id), movie);
    }

    @ApiOperation({
        description: 'Se autenticado, esta rota será responsável por deletar um filme cadastrado desde que seu id seja passado como parâmetro'
    })
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteMovie(@Param('id') id: string) {
        return this.moviesService.deleteMovie(Number(id));
    }

}