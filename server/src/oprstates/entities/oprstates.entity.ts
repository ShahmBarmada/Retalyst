import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OprStates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, collation: 'ar-SA-x-icu' })
  desc: string;

  @Column({ type: 'smallint' })
  mp: number;
}
