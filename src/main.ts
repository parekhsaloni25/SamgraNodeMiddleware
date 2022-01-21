import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dbConfigService } from './configs/config.service';
import fs = require('fs');
fs.writeFileSync('ormconfig.json',
 JSON.stringify(dbConfigService.getTypeOrmConfig(), null, 2)
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
