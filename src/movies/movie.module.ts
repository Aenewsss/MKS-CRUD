import {  CacheModule, Module } from "@nestjs/common";
import * as redisStore from "cache-manager-redis-store";
import { DatabaseModule } from "src/database/database.module";
import { movieProvider } from "src/providers/movie.provider";
import { MoviesController } from "./movie.controller";
import { MoviesService } from "./movie.service";

@Module({
    imports: [DatabaseModule,
        CacheModule.register<any>({
            store: redisStore,
            socket: {
                host: 'localhost',
                port: 6379,
            },
        }),
    ],
    controllers: [MoviesController],
    providers: [
        ...movieProvider, 
        MoviesService,
    ]
})
export class MoviesModule { }