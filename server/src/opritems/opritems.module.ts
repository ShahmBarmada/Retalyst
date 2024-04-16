import { Module } from '@nestjs/common';
import { OpritemsService } from './opritems.service';
import { OpritemsController } from './opritems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OprItems } from './entities/opritems.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OprItems])],
  controllers: [OpritemsController],
  providers: [OpritemsService],
  exports: [TypeOrmModule],
})
export class OpritemsModule {}
