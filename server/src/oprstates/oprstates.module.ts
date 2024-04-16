import { Module } from '@nestjs/common';
import { OprstatesService } from './oprstates.service';
import { OprstatesController } from './oprstates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OprStates } from './entities/oprstates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OprStates])],
  controllers: [OprstatesController],
  providers: [OprstatesService],
  exports: [TypeOrmModule],
})
export class OprstatesModule {}
