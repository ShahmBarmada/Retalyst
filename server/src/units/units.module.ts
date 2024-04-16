import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Units } from './entities/units.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Units])],
  controllers: [UnitsController],
  providers: [UnitsService],
  exports: [TypeOrmModule],
})
export class UnitsModule {}
