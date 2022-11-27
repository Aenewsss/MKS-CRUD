import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MoviesModule } from 'src/movies/movie.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProvider } from 'src/providers/user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports: [
    MoviesModule,
    PassportModule,
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    })
  ],
  controllers: [AuthController],
  providers: [...userProvider, AuthService, JwtStrategy]
})
export class AuthModule { }
