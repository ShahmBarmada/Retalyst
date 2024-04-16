import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Units {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, collation: 'ar-SA-x-icu' })
  name: string;

  @Column({ type: 'varchar', length: 5, collation: 'ar-SA-x-icu' })
  abb: string;

  @Column({ type: 'boolean', default: false })
  rounding: boolean;
}
