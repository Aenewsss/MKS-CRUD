import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/user.entity';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async signIn(user: User) {
        let found = await this.userRepository.findOne({ where: { username: user.username, password: user.password } });
        if (!found) throw new UnauthorizedException('Usuário ou senha inválida')
        return this.authUser(found.id, found.username, 'user')
    }

    signUp(user: User): Promise<InsertResult> {
        return this.userRepository.insert(user)
    }

    authUser(userId: number, username: string, type: string) {
        return this.jwtService.sign({
            sub: userId,
            username,
            claim: type
        })
    }
}
