import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URI,
  synchronize: false,
  dropSchema: false,
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['migrations/**/*{.ts,.js}'],
});
