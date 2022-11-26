import { Provider } from "@nestjs/common";
import { Movie } from "src/entity/movie.entity";
import { Connection } from "typeorm";

export const movieProvider: Provider[] = [
    {
        provide: 'MOVIES_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Movie),
        inject: ['DB_CONNECTION']
    }
]