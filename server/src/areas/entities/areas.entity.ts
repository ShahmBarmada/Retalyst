import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Areas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  level: number;

  @Column({ type: 'smallint' })
  parent: number;

  @Column({
    type: 'varchar',
    length: 30,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  gov: string;

  @Column({
    type: 'varchar',
    length: 30,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  div: string;

  @Column({
    type: 'varchar',
    length: 30,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  city: string;

  @Column({
    type: 'varchar',
    length: 30,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  district: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;
}
