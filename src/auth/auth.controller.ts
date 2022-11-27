import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entity/user.entity';
import { AuthService } from './auth.service';

@ApiTags('users')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({
        description: 'Inserir login e senha para logar o usuário e registrar seu token JWT'
    })
    @Post('login')
    signIn(@Body() user: User) {
        return this.authService.signIn(user);
    }

    @ApiOperation({
        description: 'Inserir login e senha para registrar o usuário'
    })
    @Post('register')
    signUp(@Body() user: User) {
        return this.authService.signUp(user)
    }
}
