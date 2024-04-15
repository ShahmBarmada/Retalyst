import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
    collation: 'ar-SA-x-icu',
    unique: true,
  })
  desc: string;

  @Column({ type: 'jsonb', default: {} })
  permissions: object;
}
