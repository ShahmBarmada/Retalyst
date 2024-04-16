import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vouchers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15 })
  value: string;

  @Column({ type: 'timestamp with time zone', precision: 0 })
  start: string;

  @Column({ type: 'timestamp with time zone', precision: 0 })
  end: string;

  @Column({ type: 'varchar', length: 125, collation: 'ar-SA-x-icu' })
  desc: string;

  @Column({ type: 'jsonb', default: {} })
  config: object;
}
