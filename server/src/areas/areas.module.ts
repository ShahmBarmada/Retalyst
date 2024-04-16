import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Areas } from './entities/areas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Areas])],
  controllers: [AreasController],
  providers: [AreasService],
  exports: [TypeOrmModule],
})
export class AreasModule {}
