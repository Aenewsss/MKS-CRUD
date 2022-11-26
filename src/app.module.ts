import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movie.module';

@Module({
  imports: [
    MoviesModule,
    RouterModule.register([
      {
        path: 'api/movies',
        module: MoviesModule
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
