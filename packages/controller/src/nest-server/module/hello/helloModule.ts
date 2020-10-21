import { Module } from '@nestjs/common'
import { HelloController } from './helloController'
import { HelloService } from './helloService'

@Module({
	imports: [],
	controllers: [HelloController],
	providers: [HelloService],
})
export default class HelloModule {}
