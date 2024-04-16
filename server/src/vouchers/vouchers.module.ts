import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vouchers } from './entities/vouchers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vouchers])],
  controllers: [VouchersController],
  providers: [VouchersService],
  exports: [TypeOrmModule],
})
export class VouchersModule {}
