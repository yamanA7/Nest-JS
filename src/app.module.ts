import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './tests/test.module';
import { LoggerMiddleware } from './logger.middleware';
import { TestController } from './tests/test.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TestModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TestController);
  }
}
