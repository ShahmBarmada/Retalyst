import { Module } from '@nestjs/common';
import { OprtypesService } from './oprtypes.service';
import { OprtypesController } from './oprtypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OprTypes } from './entities/oprtypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OprTypes])],
  controllers: [OprtypesController],
  providers: [OprtypesService],
  exports: [TypeOrmModule],
})
export class OprtypesModule {}
