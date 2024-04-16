import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RolesModule } from './roles/roles.module';
import { AreasModule } from './areas/areas.module';
import { AddressesModule } from './addresses/addresses.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { DelivrulesModule } from './delivrules/delivrules.module';
import { OprtypesModule } from './oprtypes/oprtypes.module';
import { OprstatesModule } from './oprstates/oprstates.module';
import { OperationsModule } from './operations/operations.module';
import { OpritemsModule } from './opritems/opritems.module';
import { UnitsModule } from './units/units.module';
import { VouchersModule } from './vouchers/vouchers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URI'),
        synchronize: false,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RolesModule,
    AreasModule,
    AddressesModule,
    CategoriesModule,
    ProductsModule,
    DelivrulesModule,
    OprtypesModule,
    OprstatesModule,
    OperationsModule,
    OpritemsModule,
    UnitsModule,
    VouchersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
