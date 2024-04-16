import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operations } from './entities/operations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operations])],
  controllers: [OperationsController],
  providers: [OperationsService],
  exports: [TypeOrmModule],
})
export class OperationsModule {}
