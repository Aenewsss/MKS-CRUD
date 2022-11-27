import { Movie } from "src/entity/movie.entity"
import { User } from "src/entity/user.entity";
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
        provide: 'DB_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [Movie, User],
                synchronize: true,
                ssl: true,
            }),
    },
];