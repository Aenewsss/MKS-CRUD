import { Movie } from "src/entity/movie.entity"
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
        provide: 'DB_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: 'babar.db.elephantsql.com',
                port: 5432,
                username: 'tzzzkxwh',
                password: '5bqET9DHVv8wi3xrY7PxUoJ2NyekL08u',
                database: 'tzzzkxwh',
                entities: [Movie],
                synchronize: true,
                ssl: true,
            }),
    },
];