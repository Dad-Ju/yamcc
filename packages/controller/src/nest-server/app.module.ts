import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { HelloModule, UserModule } from './module'

@Module({
	imports: [
		HelloModule,
		UserModule,
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', '..', 'admin'),
			serveRoot: '/admin',
		}),
	],
})
export class AppModule {}
