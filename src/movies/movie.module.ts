import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { movieProvider } from "src/providers/movie.provider";
import { MoviesController } from "./movie.controller";
import { MoviesService } from "./movie.service";

@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    providers: [...movieProvider, MoviesService]
})
export class MoviesModule { }